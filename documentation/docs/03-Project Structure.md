---
slug: /project-structure
sidebar_label: Project Structure
title: Project Structure
id: project-structure
keywords: [project structure, structure, architecture]
---

The overarching objective of this boilerplate's architecture is to ensure a clear separation of concerns and to harness 
the full potential of React Native. 
To achieve this, the project structure is thoughtfully organized into distinct sections, each serving a specific purpose.

## Specific Top-Level Boilerplate Folders

| Folders            | Description                                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| `src/components`   | Home to application components, following the atomic design methodology for organizing presentational components. |
| `src/hooks`        | Custom hooks used throughout the application.                                                                     |
| `src/navigators`   | Navigator components responsible for handling navigation.                                                         |
| `src/screens`      | Screen components representing various app screens.                                                               |
| `src/services` ️   | Houses data fetching and related services.                                                                        |
| `src/theme`        | Holds theme configuration for the application.                                                                    |
| `src/translations` | Configuration related to language support.                                                                        |
| `src/types`        | Custom type definitions for the project.                                                                          |

## Specific Top-Level Boilerplate Files

| Files              | Description                                         |
|--------------------|-----------------------------------------------------|
| `.env`             | Environment variables configuration.                |
| `jest.config.js`   | Configuration file for Jest testing.                |
| `jest.setup.js`    | Jest mocking configuration.                         |
| `tsconfig.json`    | TypeScript configuration (for TypeScript projects). |
| `src/App.{js.tsx}` | Main component of the application.                  |

## Atomic Design

The `components` folder follows the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) methodology. 
This approach emphasizes modularity and reusability by breaking down elements into atomic components. 
By doing so, development teams can create more consistent, scalable, and maintainable projects.
