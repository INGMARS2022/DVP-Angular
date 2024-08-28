import { createAction, props } from "@ngrx/store";

export const savepagedefaulters = createAction(
    '[PageDefaulters Component] Save',
    props<{page:number}>()
    );
export const initialpagedefaulters  = createAction(
    '[PageDefaulters Component] initial',
    );