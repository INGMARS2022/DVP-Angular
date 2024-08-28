import { createAction, props } from "@ngrx/store";
import { searchDefaultersStore } from "src/app/interface/interface";

export const savesearchdefaulters = createAction(
    '[SearchDefaulters Component] Save',
    props<{obj:searchDefaultersStore}>()
    );
export const initialsearchdefaulters  = createAction(
    '[SearchDefaulters Component] initial',
    );