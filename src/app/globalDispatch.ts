import { RootDispatch } from "./types";

export let dispatch: RootDispatch;

export const setDispatch = (val: any) => {
  dispatch = val;
};
