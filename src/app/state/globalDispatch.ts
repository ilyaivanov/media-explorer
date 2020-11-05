import { RootDispatch, RootState } from "../types";
import _ from "lodash";
import { initialState } from "./initialState";
import React, { useEffect } from "react";
import { reducer } from "./reducer";

export let dispatch: RootDispatch;

const saveItems = _.debounce(
  (items) => {
    localStorage.setItem("state:v1", JSON.stringify(items));
  },
  600,
  { trailing: true }
);
export const useStoreWithGlobalDispatch = () => {
  const items = localStorage.getItem("state:v1");
  const initial: RootState = items
    ? {
        ...initialState,
        items: JSON.parse(items),
      }
    : initialState;
  const [state, localDispatch] = React.useReducer(reducer, initial);
  dispatch = localDispatch;

  useEffect(() => saveItems(state.items), [state.items]);
  return state;
};
