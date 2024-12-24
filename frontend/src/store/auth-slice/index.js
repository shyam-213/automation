import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    isLogin : false,
};

//Signup
export const signup = createAsyncThunk(
    'Signup',

    async ({ firstName, lastName, email, password }) => {

        console.log(firstName, lastName, email, password);
        const response = await axios.post('http://localhost:5000/api/Signup',
            { firstName, lastName, email, password },
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

//Login
export const login = createAsyncThunk(
    'Signin',

    async ({ email, password }) => {
        const response = await axios.post('http://localhost:5000/api/Signin',
            { email, password },
            {
                withCredentials: true,
            }
        );
        return response.data;
    }
);

//Logout
export const logout = createAsyncThunk(
    'auth/logout',

    async () => {
        const response = await axios.get
            ('http://localhost:5000/api/logout',
                {
                    withCredentials: true,
                }
            );

        return response.data;

    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action);

                state.loading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
                state.isLogin = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.loading = false;
            })
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;