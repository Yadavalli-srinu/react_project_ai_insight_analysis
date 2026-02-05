import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAIResponse } from "./aiService";

export const analyzeText = createAsyncThunk("ai/analyze", async (text) => {
  return await fetchAIResponse(text);
});

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    result: null,
    history: JSON.parse(localStorage.getItem("history")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    clearResult: (state) => {
      state.result = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(analyzeText.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(analyzeText.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
        state.history.unshift(action.payload);
        localStorage.setItem("history", JSON.stringify(state.history));
      })
      .addCase(analyzeText.rejected, (state) => {
        state.loading = false;
        state.error = "AI analysis failed";
      });
  },
});

export const { clearResult } = aiSlice.actions;
export default aiSlice.reducer;