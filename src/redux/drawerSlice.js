import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    colour: null,
    number: null
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers:{
        pickColour: (state,action)=>{
            state.colour = action.payload
        },
        pickNumber: (state,action)=>{
            state.number = action.payload
        },
        pickClear:(state)=>{
            state.number = null
            state.colour = null
        }
    }
})


export const fetchdata = (name) => async (dispatch)=>{
    const url = `../data/cardLibrary.json`
    let temp = await fetch(url);
    let data = await temp.json();
    console.log(data)
}

export const selectCard = (state) => state.drawer.number +" "+state.drawer.colour
export const selectColour = (state) => state.drawer.colour
export const selectNumber = (state) => state.drawer.number

export const {pickColour,pickNumber,pickClear} = drawerSlice.actions
export default drawerSlice.reducer