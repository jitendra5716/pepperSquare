import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    events:[],
    filteredEvents:[],
    loading:false,
    error:null,
}

export const getInitialData = createAsyncThunk('event/getInitialData',async()=>{
    try{
        const {data} = await axios.get('http://localhost:1337/api/events?populate=*');
        return data;
    }catch(err){
        return console.log(err);
    }
});

export const filterEvents = createAsyncThunk('event/filterEvents',async(value)=>{
    try{
        // console.log(value);
        const {data} = await axios.get(`http://localhost:1337/api/events?filters[title][$eq]=${value}&populate=*`);
        // console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
})

const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getInitialData.pending]:(state,action)=>{
            state.loading = true;
        },
        [getInitialData.fulfilled]:(state,action)=>{
            state.loading = false;
            state.events = action.payload;
        },
        [getInitialData.rejected]:(state,action)=>{
            state.loading = false;
            state.events = action.payload;
        },
        [filterEvents.pending]:(state,action)=>{
            state.loading = true;
        },
        [filterEvents.fulfilled]:(state,action)=>{
            state.loading = false;
            state.events = action.payload;
        },
        [filterEvents.rejected]:(state,action)=>{
            state.loading = false;
            state.events = action.payload;
        }
    }
});

export const eventsReducer = eventSlice.reducer;
export const eventActions = eventSlice.actions;
export const eventSelector = (state)=>state.eventsReducer;