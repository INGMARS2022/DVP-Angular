import { createAction, props } from "@ngrx/store";
import { searchPayStore } from "src/app/interface/interface";

export const savesearchpay = createAction(
    '[SearchPay Component] Save',
    props<{obj:searchPayStore}>()
    );
export const initialsearchpay  = createAction(
    '[SearchPay Component] initial',
    );