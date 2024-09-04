import { createReducer, on } from "@ngrx/store";
import { initialpagepay, savepagepay } from "./pagepay.actions";

export const initialState:number= 1;
export const pagePayReducer = createReducer(
    initialState,
    on(savepagepay, (state,props) => {
        let page = props.page;
        return page;
    }),
    on(initialpagepay, (state)=>initialState),
  );