import { configureStore } from '@reduxjs/toolkit'
import UserReducer, { UserState } from './user/userSlice'

export interface StoreState{
    user: UserState
}

export default configureStore({
  reducer: {
    user: UserReducer},
})