import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articleSlice";
import blogsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    blogs: blogsReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
