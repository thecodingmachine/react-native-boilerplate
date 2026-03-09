---
slug: /installation
sidebar_label: Installation
title: Installation
id: installation
keywords: [getting started, installation, react native, react-native, react-native-boilerplate, boilerplate, react-native-template, template, TypeScript, JavaScript]
---

## Requirements

To get started, you simply need to meet the same requirements as outlined in the
[React Native environment setup](https://reactnative.dev/docs/environment-setup) guide.
Follow the installation instructions, and you'll be on your way!

## Using the boilerplate

You can create a new project using the React Native CLI's init command and set the appropriate template by running:

```bash title=">_ terminal"
npx @react-native-community/cli@latest init MyApp --template @thecodingmachine/react-native-boilerplate
```

During the installation process, you will encounter the following prompt:

```bash title=">_ terminal"
📘 Using typescript ? (Y/n)
```

This prompt gives you the flexibility to choose whether you want to use TypeScript or JavaScript for your project.

### TypeScript (Default - Recommended)

If you choose **Yes** (or simply press Enter), your project will be set up with TypeScript. This includes:
- Full TypeScript support with strict type checking
- Type definitions for all services, components, and hooks
- Enhanced IDE autocomplete and error detection
- Better refactoring capabilities

### JavaScript

If you choose **No**, the boilerplate will automatically:
1. 📦 Install TypeScript temporarily as a build tool
2. 🧱 Compile all TypeScript source files to JavaScript
3. 🖼️ Copy assets (images, icons) to the compiled output
4. ♻️ Replace the TypeScript source with the compiled JavaScript code
5. 🌀 Remove TypeScript-specific files:
   - Type definition files (`*.d.ts`)
   - Type directories (`src/services/theme-generation/types/`)
   - Navigation type files

The resulting project will be pure JavaScript while maintaining the same architecture and structure.

:::tip Windows Users
If you're on Windows, we recommend using **Git Bash** or **WSL** for the installation process. The JavaScript compilation uses POSIX shell commands that are not available in Command Prompt or PowerShell.

If you encounter `spawnSync ENOENT` errors, ensure you're using Git Bash or check the [FAQ troubleshooting section](/docs/faq#installation--troubleshooting).
:::

:::note ESLint Configuration
The ESLint configuration is designed to work with both TypeScript and JavaScript projects. When using JavaScript, TypeScript-specific rules are automatically disabled.
:::

:::warning Migration Limitation
Once you choose JavaScript, migrating back to TypeScript requires manual effort. Consider your team's preferences carefully before making this choice.
:::

## Running the project

Assuming you have all the requirements installed, you can run the project with the following steps:

- Run `yarn start` to initiate the Metro bundler. Open a separate terminal for this.

- Run `yarn <platform>` to launch the application on your desired platform.
Make sure to either start a simulator or connect a physical device for testing.
