[Redux](https://redux.js.org/) is a library that helps managing the application state.

This directory contains redux [actions, reducers and stores](https://redux.js.org/basics).

Here is an example of how to organize those concepts by theme:

```bash
User/
    Actions.js # Contains the redux actions for user management
    InitialState.js # Contains the initial values for the state related to the user
    Reducers.js # Contains the redux reducers for user management
Team/
    Actions.js
    InitialState.js
    Reducers.js
...
```
