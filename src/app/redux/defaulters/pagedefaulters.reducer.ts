import { createReducer, on } from "@ngrx/store";
import { initialpagedefaulters, savepagedefaulters } from "./pagedefaulters.actions";

export const initialState:number= 1;
export const pageDefaulterReducer = createReducer(
    initialState,
    on(savepagedefaulters, (state,props) => {
        let page = props.page;
        return page;
    }),
    on(initialpagedefaulters, (state)=>initialState),
  );