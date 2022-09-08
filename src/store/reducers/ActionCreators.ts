import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../Interfaces/IUser";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)