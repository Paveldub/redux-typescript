import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../Interfaces/IUser";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/use2rs')
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('Не удалось загрузить данные')
        }
    }
)