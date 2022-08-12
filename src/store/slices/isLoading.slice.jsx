import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';
import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setisloading: (state,action)=>{
            return action.payload 
        }
    }
})

export const {  } = isLoading.actions;

export default isLoading.reducer;
