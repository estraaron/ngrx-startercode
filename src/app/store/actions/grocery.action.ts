import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { Grocery } from "../../../models/grocery.model";

// export const initGroceries = createAction(
//   '[Grocery] Load Groceries'
// );

// export const CompleteGroceries = createAction(
//   '[Grocery] Load Groceries Success'
// );

export const groceryAction = createActionGroup({
  source: "Grocery API",
  events: {
    'Load Groceries': emptyProps(),
    'Load Groceries Success': props<{payload:Grocery[]}>(),
    'load Groceries Failure': emptyProps(),
  }
})
