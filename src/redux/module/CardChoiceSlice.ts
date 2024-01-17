import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
    value: number | undefined,
};

const initialState : InitialStateType = {
    value: undefined,
};

const cardChoiceSlice = createSlice({
    name: "cardChoice",
    initialState,
    reducers: {
        cardClick: (state, action : PayloadAction<number | undefined>) => {
            return {
                ...state,
                value: action.payload
            }
        },
    }
});

export default cardChoiceSlice.reducer;
export const { cardClick } = cardChoiceSlice.actions;