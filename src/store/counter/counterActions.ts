import { createStandardAction } from "typesafe-actions";

export const increment = createStandardAction("@TA/COUNTER/INCREMENT")<void>();
export const decrement = createStandardAction("@TA/COUNTER/DECREMENT")<void>();
