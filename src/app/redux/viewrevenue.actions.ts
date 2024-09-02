import { createAction, props } from "@ngrx/store";
import { viewRevenueStore } from "../interface/interface";

export const saveviewrevenue = createAction(
    '[ViewRevenue Component] Save',
    props<{obj:viewRevenueStore}>()
    );
export const initialviewrevenue  = createAction(
    '[ViewRevenue Component] initial',
    );
export const paginatorviewrevenue  = createAction(
    '[ViewRevenue Component] paginator',
    props<{obj:viewRevenueStore}>()
    );