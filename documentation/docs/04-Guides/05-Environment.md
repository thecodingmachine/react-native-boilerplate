---
slug: /environment
sidebar_label: Environment variables
title: Environment variables
id: environment
keywords: [environment, variables, env, dotenv, babel-plugin-inline-dotenv]
---
Unlock the power of environment variables with ease, 
thanks to dotenv and babel-plugin-inline-dotenv. 
These essential tools come pre-installed in our project, 
giving you a hassle-free setup for managing your environment variables.

## Usage

Open the `.env` file and add your environment variables like this:


```env
API_URL=https://myapi.com
```

You can access your environment variables in your JavaScript/Typescript code like this:


```javascript
process.env.API_URL
```

## Next steps

This provides a basic setup for handling environment variables in your 
JavaScript/TypeScript code. However, as your project grows, you may also need environment 
variables in your Native code. In such cases, we recommend using 
[react-native-config](https://github.com/luggit/react-native-config) 
for a more comprehensive solution.
