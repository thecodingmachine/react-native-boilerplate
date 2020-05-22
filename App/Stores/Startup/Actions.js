import {makeCreators, makeTypes} from "App/Stores/utils";


const Types = {
  STARTUP: null,
}

const Creators = makeCreators(Types)

export const StartupTypes = makeTypes(Types)
export default Creators
