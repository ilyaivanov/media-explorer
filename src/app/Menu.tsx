import React from "react";
import { UIOptions } from "./types";
import * as actions from "./state/actions";
import { dispatch } from "./globalDispatch";
import { initialState } from "./state/initialState";

interface Props {
  options: UIOptions;
}

const Menu = React.memo(({ options }: Props) => (
  <div className="menu" style={{ height: 50 }}>
    search:
    <button onClick={() => dispatch(actions.toggleSearchVisibility())}>
      {options.isSearchVisible ? "hide" : "show"}
    </button>
    <button
      onClick={() => {
        dispatch(actions.setRootState(initialState));
      }}
    >
      reset state
    </button>
  </div>
));

export default Menu;
