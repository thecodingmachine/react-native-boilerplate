import {makeCreators, makeTypes} from "../utils";

const Types = {
  // Fetch user informations
  FETCH_USER: null,
  // The operation has started and is loading
  FETCH_USER_LOADING: null,
  // User informations were successfully fetched
  FETCH_USER_SUCCESS: (user) => ({ payload: { user } }),
  // An error occurred
  FETCH_USER_FAILURE: (errorMessage) => ({ payload: { errorMessage } }),
}

const Creators = makeCreators(Types)

export const ExampleTypes = makeTypes(Types)
export default Creators
