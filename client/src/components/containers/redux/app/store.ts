import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// root reducer here 
export const store = configureStore({
  reducer: {
    // TO DO : add reducer here
    // e.g => counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
