import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogAPI } from "../../services/blogApi";
import { IBlog, QueryParams } from "../../types";

interface BlogState {
  isLoading: boolean;
  error: null | string;
  results: IBlog[];
  searchArea?: string;
}

export const fetchNews = createAsyncThunk<IBlog[], QueryParams, { rejectValue: string }>(
  "news/fetchNews",
  async ({ limit, page }, { rejectWithValue }) => {
    try {
      return await blogAPI.getBlogs({ limit, page, order: "" });
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const initialState: BlogState = {
  isLoading: false,
  error: null,
  results: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    cleanStore: (state) => {
      state.results = [];
    },
    SearchArea: (state, { payload }) => {
      state.searchArea = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { cleanStore, SearchArea } = newsSlice.actions;
export default newsSlice.reducer;
