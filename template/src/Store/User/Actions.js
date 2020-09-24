import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchOneUserService } from '@/Services/User'

export const FetchOneUserAction = createAsyncThunk(
  'user/fetchOne',
  FetchOneUserService,
)
