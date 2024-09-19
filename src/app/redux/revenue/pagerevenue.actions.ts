import { createAction, props } from "@ngrx/store";

export const savepagerevenue = createAction(
    '[PageRevenue Component] Save',
    props<{page:number}>()
    );
export const initialpagerevenue = createAction(
    '[PageRevenue Component] initial',
    );