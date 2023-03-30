import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[],
    totalCount:0,
    query: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setQuery: (state,action) => {
            state.query = action.payload.trim()
        },
        setTotalCount: (state,action) => {
            state.totalCount = action.payload
        },
        setUsers: (state,action) => {
            state.data = action.payload
        },
        setMoreUsers: (state,action) => {
            state.data = [...state.data,...action.payload]
        },
    },
})

export const { setQuery, setUsers, setMoreUsers, setTotalCount } = userSlice.actions

export default userSlice.reducer