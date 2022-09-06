import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"
import drawerReducer from "./drawerSlice";


const middlewares = [logger]

const store = configureStore({
    reducer: {
        drawer: drawerReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middlewares)
})



export default store;
