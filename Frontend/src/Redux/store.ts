import { configureStore } from '@reduxjs/toolkit'
import mainPageReducer from './mainPageSlice'

export const store = configureStore({
  reducer: {
      mainPage: mainPageReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch