import { createAction, props } from "@ngrx/store";
import { viewDefaultersStore } from "../interface/interface";

export const saveviewdefaulters = createAction(
    '[ViewDefaulters Component] Save',
    props<{obj:viewDefaultersStore}>()
    );
export const initialviewdefaulters  = createAction(
    '[ViewDefaulters Component] initial',
    );
export const paginatorviewdefaulters  = createAction(
    '[ViewDefaulters Component] paginator',
    props<{obj:viewDefaultersStore}>()
    );