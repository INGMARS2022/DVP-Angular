import { createAction, props } from "@ngrx/store";

export const savepagelayout = createAction(
    '[PageLayout Component] Save',
    props<{page:number}>()
    );
export const initialpagelayout  = createAction(
    '[PageLayout Component] initial',
    );