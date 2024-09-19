import { createReducer, on } from "@ngrx/store";
import { initialpagerevenue, savepagerevenue } from "./pagerevenue.actions";

export const initialState:number= 1;
export const pageRevenueReducer = createReducer(
    initialState,
    on(savepagerevenue, (state,props) => {
        let page = props.page;
        return page;
    }),
    on(initialpagerevenue, (state)=>initialState),
  );