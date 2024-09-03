import { createAction, props } from "@ngrx/store";
import { searchLayoutStore } from "src/app/interface/interface";

export const savesearchlayout = createAction(
    '[SearchLayout Component] Save',
    props<{obj:searchLayoutStore}>()
    );
export const initialsearchlayout  = createAction(
    '[SearchLayout Component] initial',
    );