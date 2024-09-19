import { createReducer, on } from "@ngrx/store";
import { searchRevenueStore } from "src/app/interface/interface";
import { initialsearchrevenue, savesearchrevenue } from "./searchrevenue.actions";

export const initialState:searchRevenueStore={
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
export const searchRevenueReducer = createReducer(
    initialState,
    on(savesearchrevenue, (state,props) => {
        let obj:searchRevenueStore={
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
    on(initialsearchrevenue, (state)=>initialState),
  );