import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import InitStartup from './Init'

export default buildSlice('startup', [InitStartup]).reducer

export interface StartupState {
  loading: boolean
  error: any
}
