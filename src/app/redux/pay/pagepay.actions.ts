import { createAction, props } from "@ngrx/store";

export const savepagepay = createAction(
    '[PagePay Component] Save',
    props<{page:number}>()
    );
export const initialpagepay = createAction(
    '[PagePay Component] initial',
    );