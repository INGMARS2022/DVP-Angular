import { createReducer, on } from "@ngrx/store";
import { initialpagelayout, savepagelayout } from "./pagelayout.actions";

export const initialState:number= 1;
export const pageLayoutReducer = createReducer(
    initialState,
    on(savepagelayout, (state,props) => {
        let page = props.page;
        return page;
    }),
    on(initialpagelayout, (state)=>initialState),
  );