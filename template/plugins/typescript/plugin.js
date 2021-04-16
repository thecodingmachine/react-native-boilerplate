const { existsSync } = require('fs')
const { copyFile, rename, readdir, lstat, unlink } = require('fs').promises
const { execSync } = require('child_process')

const SCRIPT_PATH = './plugins/typescript'
const TEMPLATE_PATH = '.'

/**
 * Apply ts files come from ts-src-override in the src folder and remove js files
 * @param accumulatedPath: current path during recursive
 * @param tsRoot: root path of the typescript template
 * @return {Promise<*>}
 */
async function overrideWithTypeScript(
  accumulatedPath = '/',
  tsRoot = `${SCRIPT_PATH}/template`,
) {
  const files = await readdir(`${tsRoot}${accumulatedPath}`)
  return Promise.all(
    files.map(async item => {
      // File found
      const element = await lstat(`${tsRoot}${accumulatedPath}${item}`)
      if (!element.isDirectory()) {
        const [name] = item.split('.')
        // Copy the ts file in the src associated path
        await copyFile(
          `${tsRoot}${accumulatedPath}${item}`,
          `${TEMPLATE_PATH}${accumulatedPath}${item}`,
        )
        // If a same name js file is found, delete it
        if (existsSync(`${TEMPLATE_PATH}${accumulatedPath}${name}.js`)) {
          return unlink(`${TEMPLATE_PATH}${accumulatedPath}${name}.js`)
        }
        return Promise.resolve()
      }
      return overrideWithTypeScript(`${accumulatedPath}${item}/`)
    }),
  )
}

/**
 * Rename js files to ts files is they're not present in ts-src-override
 * @param accumulatedPath: current path during recursive
 * @param isTsx: current file is a tsx file
 * @param jsRoot: root path of the base template
 * @return {Promise<*>}
 */
async function renameWithTypeScript(
  accumulatedPath = '/',
  isTsx = true,
  jsRoot = `${TEMPLATE_PATH}/src`,
) {
  const EXCLUDED_DIRECTORIES = ['Assets', 'Config']
  const TSX_DIRECTORIES = ['Components', 'Containers', 'Navigators']
  const files = await readdir(`${jsRoot}${accumulatedPath}`)
  return Promise.all(
    files.map(async item => {
      const [name, extension] = item.split('.')
      const element = await lstat(`${jsRoot}${accumulatedPath}${item}`)
      if (!element.isDirectory()) {
        if (extension === 'js') {
          let fileExtension = '.ts'
          const firstCharIsUpperCase =
            name.charAt(0).toUpperCase() === name.charAt(0)
          if (isTsx && firstCharIsUpperCase) {
            fileExtension = '.tsx'
          }
          return rename(
            `${jsRoot}${accumulatedPath}${item}`,
            `${jsRoot}${accumulatedPath}${name}${fileExtension}`,
          )
        }
        return Promise.resolve()
      }
      const tsxCondition =
        accumulatedPath === '/'
          ? TSX_DIRECTORIES.includes(item)
          : isTsx || TSX_DIRECTORIES.includes(item)
      if (!EXCLUDED_DIRECTORIES.includes(item)) {
        return renameWithTypeScript(`${accumulatedPath}${item}/`, tsxCondition)
      }
      return Promise.resolve()
    }),
  )
}

/**
 * Apply the typescript support by overriding with ts files and rename js files
 * @return {Promise<void>}
 */
async function chooseTypescript() {
  // add the tsconfig.json
  await copyFile(
    `${SCRIPT_PATH}/template/tsconfig.example.json`,
    `${TEMPLATE_PATH}/tsconfig.json`,
  )
  await overrideWithTypeScript()
  await renameWithTypeScript()
}

module.exports = {
  /**
   * @param value: prompts result
   * @param previousValues: previous prompts result
   * @return {Promise<void>}
   */
  async apply(value, previousValues) {
    if (value) {
      await chooseTypescript()
      await copyFile(
        `${TEMPLATE_PATH}/src/Config/index.example.js`,
        `${TEMPLATE_PATH}/src/Config/index.ts`,
      )
      await rename(
        `${TEMPLATE_PATH}/src/Config/index.example.js`,
        `${TEMPLATE_PATH}/src/Config/index.example.ts`,
      )
      execSync(
        'yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer @types/fbemitter @types/react-redux',
        { stdio: 'pipe' },
      )
    } else {
      await copyFile(
        `${TEMPLATE_PATH}/src/Config/index.example.js`,
        `${TEMPLATE_PATH}/src/Config/index.js`,
      )
    }
  },
}
