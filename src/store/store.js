import { configureStore } from "@reduxjs/toolkit"; //import configureStore in store to create a store//
import homeSlice from "./homeSlice";


export const store = configureStore({  
    reducer :{
        home: homeSlice
    }
}) 