import { buildSlice } from '@/Store/builder'
import InitStartup from './Init'

export default buildSlice('startup', [InitStartup]).reducer
