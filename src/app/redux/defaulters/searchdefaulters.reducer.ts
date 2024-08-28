import { createReducer, on } from "@ngrx/store";
import { searchDefaultersStore } from "src/app/interface/interface";
import { initialsearchdefaulters, savesearchdefaulters } from "./searchdefaulters.actions";

export const initialState:searchDefaultersStore={
    client:"null",
    billing:"null",
    service:"null",
    paginator:{
        totalResults:0,
        initialPage:1,
        actualPage:1,
        finalPage:1
    },
    results:[]
};
export const searchDefaulterReducer = createReducer(
    initialState,
    on(savesearchdefaulters, (state,props) => {
        let obj:searchDefaultersStore={
            client:props.obj.client,
            billing:props.obj.billing,
            service:props.obj.service,
            paginator:{
                totalResults:props.obj.paginator.totalResults,
                initialPage:props.obj.paginator.initialPage,
                actualPage:props.obj.paginator.actualPage,
                finalPage:props.obj.paginator.finalPage
                
            },
            results:props.obj.results
        }
        return obj;
    }),
    on(initialsearchdefaulters, (state)=>initialState),
  );