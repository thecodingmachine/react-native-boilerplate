import { fetchUser as fetchOne } from '@/Services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('example/fetchUser', fetchOne)
