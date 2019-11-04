import { CHANGE_INPUT, UPDATELIST } from "./actionTypes";

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const updateList = value => ({
  type: UPDATELIST,
  value
});
