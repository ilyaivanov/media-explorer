import React from "react";
import { RootDispatch, UIOptions } from "./types";
import * as actions from "./state/actions";

interface Props {
  options: UIOptions;
  dispatch: RootDispatch;
}

const Menu = React.memo(({ options, dispatch }: Props) => (
  <div className="menu" style={{ height: 50 }}>
    search:
    <button onClick={() => dispatch(actions.toggleSearchVisibility())}>
      {options.isSearchVisible ? "hide" : "show"}
    </button>
  </div>
));

export default Menu;
