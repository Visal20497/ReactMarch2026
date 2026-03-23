import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
}

export const getData = createAsyncThunk<Post[]>("fetch/getData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post[] = await response.json();
  return data;
});

interface State {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch data";
      });
  },
});

export default fetchSlice;
