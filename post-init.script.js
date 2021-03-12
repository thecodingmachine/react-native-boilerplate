#!/usr/bin/env node
const fs = require('fs');
const prompts = require('prompts');
const { execSync } = require('child_process');
const { green, blue } = require('kleur');

prompts({
    type: 'confirm',
    name: 'usingTs',
    message: 'Using typescript ?',
    initial: false
}).then(async (response) => {
    if (response.usingTs) {
        await chooseTypescript();
        fs.copyFile('src/Config/index.example.js', 'src/Config/index.ts', (err) => {
            if (err) throw err;
            fs.rename('src/Config/index.example.js', 'src/Config/index.example.ts', function(err) {
                if (err) throw err;
            });
        });
        execSync('yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer @types/fbemitter @types/react-redux\n ', {stdio : 'pipe' });
    } else {
        fs.copyFile('src/Config/index.example.js', 'src/Config/index.js', (err) => {
            if (err) throw err;
        });
    }

    //Remove the ts-support
    fs.rmdir('ts-support-template', { recursive: true }, (err) => {
        if (err) throw err;
    });

    printSuccess(response.usingTs);
});
// To improve: needed because the "Executing post init script" is on top of the prompt
console.log('\n');

// Function that apply the ts support
function chooseTypescript() {
    return new Promise((resolve, reject) => {
        // add the tsconfig.json
        fs.copyFile('ts-support-template/tsconfig.json', 'tsconfig.json', (err) => {
            if (err) throw err;
        });
        overrideWithTypeScript();
        renameWithTypeScript();
        resolve();
    })
}

function overrideWithTypeScript(accumulatedPath = '/', tsRoot = 'ts-support-template') {
    return fs.readdirSync(`${tsRoot}${accumulatedPath}`).forEach((item) => {
        if (!fs.lstatSync(`${tsRoot}${accumulatedPath}${item}`).isDirectory()) {
            const [name] = item.split('.');
            fs.copyFile(`${tsRoot}${accumulatedPath}${item}`, `.${accumulatedPath}${item}`, (err) => {
                if (err) throw err;
            });
            if (fs.existsSync(`.${accumulatedPath}${name}.js`)) {
                fs.unlink(`.${accumulatedPath}${name}.js`, (err) => {
                    if (err) throw err;
                });
            }
        } else {
            overrideWithTypeScript(`${accumulatedPath}${item}/`);
        }
    });
}

function renameWithTypeScript(accumulatedPath = '/', isTsx = true , jsRoot = 'src') {
    const EXCLUDED_DIRECTORIES = ['Assets', 'Config'];
    const TSX_DIRECTORIES = ['Components', 'Containers', 'Navigators'];
    return fs.readdirSync(`${jsRoot}${accumulatedPath}`).forEach((item) => {
        const [name, extension] = item.split('.');
        if (!fs.lstatSync(`${jsRoot}${accumulatedPath}${item}`).isDirectory()) {
            if (extension === 'js') {
                let fileExtension = '.ts';
                const firstCharIsUpperCase = name.charAt(0).toUpperCase() === name.charAt(0);
                if (isTsx && firstCharIsUpperCase) {
                    fileExtension = '.tsx';
                }
                fs.rename(`${jsRoot}${accumulatedPath}${item}`, `${jsRoot}${accumulatedPath}${name}${fileExtension}`, function(err) {
                    if (err) throw err;
                });
            }
        } else {
            const tsxCondition = accumulatedPath === '/' ? TSX_DIRECTORIES.includes(item) : isTsx || TSX_DIRECTORIES.includes(item);
            if (!EXCLUDED_DIRECTORIES.includes(item)) {
                renameWithTypeScript(`${accumulatedPath}${item}/`, tsxCondition);
            }
        }
    });
}

function printSuccess(isTs) {
    console.log("\n");
    console.log("TheCodingMachine React-Native Boilerplate initialized with success !");
    console.log("" +
      green("                                                                    .-`    `::  \n" +
      " `/////////////     `/shhhy+-   ://.        /sy/                   /ss/   :NMN: \n" +
      " `sssssyhhhyhhy:` `yMMMMNNMMMd. osss:     `hMMMh-    .-`         `+ss:   +MMm/. \n" +
      "      :MMM+----. `mMMm+:-`.oo/` osssyo`  `dMMMMh-   ohhh-       `oyy+-  sMMd/.  \n" +
      "      :MMM+`     oMMN/-         osssyhs`.mMMMMMh-   -hds`      .syy+- `hMMh:`   \n" +
      "      :MMM+`     hMMd:          oss-ohhhMMMhdMMh-    `.       +NNm/. .dMMy:`    \n" +
      "      :MMM+`     oMMN/          oss-`shdMMd:dMMh-    :-`     sMMd/. -NMMo-      \n" +
      "      :MMM+`     `mMMm/`  `/+:. oss- `sdMd:.hMMh-   hMys-  `hMMh:` -hdy-`       \n" +
      "      :MMM+`      `yMMMMdssss+  oss.  `oh/- hMMh-   -hyo:  dMMs:` -ss+`         \n" +
      "      .oys:`        .+yhyo/-    -::`    ``  -syo-     ..`  +mo-   `//           \n" +
      "        ``             ```                    ``            `.                  "));
    if (isTs) {
        console.log(blue("THE TYPESCRIPT VERSION"));
    }
    console.log("\n");

    console.log('- If you need to read more about this boilerplate : https://thecodingmachine.github.io/react-native-boilerplate/');
    console.log('- If you have some troubles : https://github.com/thecodingmachine/react-native-boilerplate/issues');
    console.log('- If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/thecodingmachine/react-native-boilerplate');
}
