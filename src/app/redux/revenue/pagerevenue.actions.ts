import { createAction, props } from "@ngrx/store";

export const savepagerevenue = createAction(
    '[PageDefaulters Component] Save',
    props<{page:number}>()
    );
export const initialpagerevenue  = createAction(
    '[PageDefaulters Component] initial',
    );