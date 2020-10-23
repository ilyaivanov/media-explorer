import Card from "./Card";
import React, { useEffect } from "react";
import { DragState, Item } from "./types";
import _ from "lodash";
import { searchItems } from "./api";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
interface Props {
  dragState: DragState;
  items: Item[];
}

const doTheSearch = _.debounce(
  (term: string) =>
    searchItems(term).then((items) =>
      dispatch(actions.setNodeChildren("SEARCH", items))
    ),
  600,
  { trailing: true }
);

const SearchResults = ({ dragState, items }: Props) => {
  const [term, setTerm] = React.useState("");

  useEffect(() => {
    if (term) doTheSearch(term);
  }, [term]);

  return (
    <div className="search-results">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.currentTarget.value)}
      />
      {items.map((item) => (
        <div key={item.id} className="card-wrapper">
          <Card dragState={dragState} item={item} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
