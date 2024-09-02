import { createReducer, on } from "@ngrx/store";
import { viewRevenueStore } from "../interface/interface";
import { initialviewrevenue, paginatorviewrevenue, saveviewrevenue } from "./viewrevenue.actions";

export const initialState:viewRevenueStore={
    search:{},
    paginator:{
        totalResults:0,
        initialPage:1,
        actualPage:1,
        finalPage:1,
    },
    results:[],
};
export const viewRevenueReducer = createReducer(
    initialState,
    on(saveviewrevenue, (state,props) => {
        let obj:viewRevenueStore={
            search:props.obj.search,
            results:props.obj.results,
            paginator:props.obj.paginator
        }
        return obj;
    }),
    on(paginatorviewrevenue, (state,props) => {
        let obj:viewRevenueStore={
            search:state.search,
            results:state.results,
            paginator:props.obj.paginator
        }
        return obj;
    }),
    on(initialviewrevenue, (state)=>initialState),
  );