import { initApplication as init } from '@/Services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const initApplication = createAsyncThunk('app/initApplication', init)
