import {applyMiddleware} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"
import drawerReducer from "./drawerSlice";
import {pokemonApi} from "../services/pokemon";

const middlewares = [logger,pokemonApi.middleware]

const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middlewares)
})



export default store;
