import { createReducer, on } from "@ngrx/store";
import { viewDefaultersStore } from "../interface/interface";
import { initialviewdefaulters, paginatorviewdefaulters, saveviewdefaulters } from "./viewdefaulters.actions";

export const initialState:viewDefaultersStore={
    search:{},
    paginator:{
        totalResults:0,
        initialPage:1,
        actualPage:1,
        finalPage:1,
    },
    results:[],
};
export const viewDefaulterReducer = createReducer(
    initialState,
    on(saveviewdefaulters, (state,props) => {
        let obj:viewDefaultersStore={
            search:props.obj.search,
            results:props.obj.results,
            paginator:props.obj.paginator
        }
        return obj;
    }),
    on(paginatorviewdefaulters, (state,props) => {
        let obj:viewDefaultersStore={
            search:state.search,
            results:state.results,
            paginator:props.obj.paginator
        }
        return obj;
    }),
    on(initialviewdefaulters, (state)=>initialState),
  );