import { createReducer, on } from "@ngrx/store";
import { searchPayStore } from "src/app/interface/interface";
import { initialsearchpay, savesearchpay } from "./searchpay.actions";

export const initialState:searchPayStore={
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
export const searchPayReducer = createReducer(
    initialState,
    on(savesearchpay, (state,props) => {
        let obj:searchPayStore={
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
    on(initialsearchpay, (state)=>initialState),
  );