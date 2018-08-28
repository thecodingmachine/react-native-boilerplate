This directory contains config with environment variables.
The directory ``environment`` contains 3 files :
- ``dev.config`` : contains development environment variables
- ``production.config`` : contains production environment variables
- ``staging.config`` : contains beta tests environment variables

####Usage
```
import config from 'App/Config/config'

...
let uri = config.API_URL
...
```