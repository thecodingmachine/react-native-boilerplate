This directory contains configuration variables in 3 files:
- `index.dev.js` : contains development variables
- `index.production.js` : contains production variables
- `index.staging.js` : contains beta tests variables

You need to create `index.js` by copying the right file.

#### Warning
Each time you need to build, you need to verify if your `index.js` is the right one.
For example, during development, before building your app do:
```
cp App\Config\index.dev.js App\Config\index.js
```
In other environment, you must pay attention to change your `index.js` with the good one.
Also, make sure you add each configuration variable in each configuration file.

#### Usage
```
import Config from 'App/Config'

...
let uri = Config.API_URL
...

```
