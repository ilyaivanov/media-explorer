import React, { useState } from "react";
import { dispatch, initialState, actions } from "./state";
import "./Menu.css";
import { searchItems } from "./api";

export const doTheSearch = (term: string) => {
  dispatch(actions.focusItem("SEARCH"));
  searchItems(term).then((items) =>
    dispatch(actions.setNodeChildren("SEARCH", items))
  );
};
const Menu = React.memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="menu">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            doTheSearch(searchTerm);
          }}
        >
          <SearchIcon />
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(actions.setRootState(initialState));
        }}
      >
        reset state
      </button>
    </div>
  );
});

export default Menu;

const SearchIcon = () => (
  <svg className={"search-icon"} viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);
