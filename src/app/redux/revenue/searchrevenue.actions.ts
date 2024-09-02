import { createAction, props } from "@ngrx/store";
import { searchRevenueStore } from "src/app/interface/interface";

export const savesearchrevenue = createAction(
    '[SearchRevenue Component] Save',
    props<{obj:searchRevenueStore}>()
    );
export const initialsearchrevenue  = createAction(
    '[SearchRevenue Component] initial',
    );