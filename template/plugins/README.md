# PLUGINS

Now we introduce the plugins system to be able to add, remove, print, normalize every file/directory into the boilerplate during the installation.
With this system, we have added the typescript support.

## Plugin definition
A plugin is defined by 3 files :
- _prompts.js
- plugin.js
- index.js

|   Files      | Type                                                                          |   Description                                                                                                                                                                                                                     |
| :----------- | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _prompts.js  | `module.exports = <PromptObject> / module.exports = null`                     | The `<PromptObject>` definition available [here](https://github.com/terkelg/prompts#-prompt-objects). `null` means, the plugin doesn't need prompts to run.                                                                        |
| plugin.js    | `module.exports = { async apply(value, previousValues) { // Add code here }}` | The `apply` function is the one that apply the refactoring of the boilerplate. `value` is the result of the prompt, `previousValues` is previous responses of previous prompts and it's defined like `{ <plugin_name>: <value> }`. |
| index.js     | `module.exports = { name: <pluginName>, <promptsOptions>, <apply> }`          | The `pluginName` is a string, `promptsOptions` is imported from `_prompts.js` and apply from `plugin.js`.                                                                                                                         |

## files structure

### _prompts.js
``` javascript
module.exports = {
  type: 'confirm',
  name: 'value', // Always use value
  message: 'Using typescript ?',
  initial: false,
}
```
### plugin.js
```javascript
const { green, blue } = require('kleur')

module.exports = {
  async apply(value, previousValues) {__
    return new Promise(resolve => {
      if (value) {
        console.log('TheCodingMachine React-Native Boilerplate initialized the TYPESCRIPT please wait !',)
      } else {
        console.log('TheCodingMachine React-Native Boilerplate initialized the JAVASCRIPT please wait !',)
      }
      resolve()
    })
  },
}

```
### index.js
```javascript
const promptsOptions = require('./_prompts');
const { apply } = require('./plugin');

module.exports = {
  name: 'typescript',
  promptsOptions,
  apply,
};
```
