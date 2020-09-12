import React, {useEffect} from "react";
import {debounce} from "lodash";
import {searchItems} from "./api";
import * as actions from "./state/actions";
import {RootDispatch, RootState} from "./types";
import {ItemsTree} from "./ItemsTree";

interface Props {
  state: RootState;
  dispatch: RootDispatch;
}

export const SearchPanel = ({ state, dispatch }: Props) => {
  const search = React.useCallback(
    debounce(
      (searchTerm: string) =>
        searchItems(searchTerm).then((items) =>
          dispatch(actions.setNodeChildren("SEARCH", items))
        ),
      600,
      { trailing: true }
    ),
    []
  );


  useEffect(() => {
    if (state.searchTerm) search(state.searchTerm);
  }, [state.searchTerm, search]);

  if (!state.options.isSearchVisible) return null;

  return (
    <div>
      <h5>Search</h5>
      <input
        type="text"
        value={state.searchTerm}
        onChange={(e) => dispatch(actions.setSearchTerm(e.currentTarget.value))}
      />
      <ItemsTree listenToDragEvents={!!state.itemBeingDraggedId} items={state.items} dispatch={dispatch} rootName="SEARCH" />
    </div>
  );
};
