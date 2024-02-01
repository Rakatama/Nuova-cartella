import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    dataLoaded: false
}

export const loadSlice = createSlice({
    name: 'load',
    initialState: {
        ...initialState
    },
    reducers: {
        setDataLoaded: (data, action) => {
            data.dataLoaded = action.payload;
        }
    }
})
export const { setDataLoaded } = loadSlice.actions;
export default loadSlice.reducer