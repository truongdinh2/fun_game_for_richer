import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface RandomState {
  nb1: number,
  nb2: number,
  nb3: number,
}
const initialState: RandomState = {
  nb1: 1,
  nb2: 2,
  nb3: 3,
}
export const randomNumberSlice = createSlice({
  name: 'randomNb',
  initialState,
  reducers: {
    random3times: (state) => {

      return state
    }
  }
})
export const { random3times } = randomNumberSlice.actions;
export default randomNumberSlice.reducer;