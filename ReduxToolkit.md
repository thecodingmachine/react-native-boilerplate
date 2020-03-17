https://redux-toolkit.js.org/introduction/quick-start

Make use of Redux Toolkit to replace reduxsauce.

##Files concerned:

- package.json:
    - added Redux Toolkit dependency
    - removed reduxsauce dependency

- in App/Stores:
    - utils.js: new file to centralize the creation of creators and types for stores actions (functions used in Actions.js)

- in App/Stores/Startup:
   - Actions.js: adjustments made to conform with Redux toolkit (see utils.js)

- in App/Stores/Example:
    - Actions.js : adjustments made to conform with Redux toolkit (see utils.js)
    - Reducers.js : adjustments made to conform with Redux toolkit (createReducer)

*Note that the names of created actions are in uppercase.
In the case where you want them to be in lowercase, watch the impacted calls to these actions in the following files:*
- *App/Sagas/index.js in the first argument of takeLatest call*
- *App/Sagas/YourSaga.js in the dispatching of action using put()*
- *App/Containers/YourScreen.js in the mapDispatchToProps section.*
