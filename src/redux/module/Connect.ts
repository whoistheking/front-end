import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : boolean = false;

const connectSlice = createSlice({
    name: "connect",
    initialState,
    reducers: {
        connectedSocket: (state, action : PayloadAction<boolean>) => {
            return action.payload;
        }
    }
});

export default connectSlice.reducer;
export const { connectedSocket } = connectSlice.actions;