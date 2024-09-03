import { createReducer, on } from "@ngrx/store";
import { searchLayoutStore } from "src/app/interface/interface";
import { initialsearchlayout, savesearchlayout } from "./searchlayout.actions";

export const initialState:searchLayoutStore={
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
export const searchLayoutReducer = createReducer(
    initialState,
    on(savesearchlayout, (state,props) => {
        let obj:searchLayoutStore={
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
    on(initialsearchlayout, (state)=>initialState),
  );