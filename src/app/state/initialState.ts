import { NodesContainer, RootState } from "../types";

const items: NodesContainer = {
  HOME: {
    children: ["1", "2"],
    id: "HOME",
    title: "HOME",
  },

  "1": { id: "1", title: "First", children: ["3"], videoId: "XdsLeeQ4s_Q" },
  "2": { id: "2", title: "Second", children: [], videoId: "L9pp1_en1EE" },
  "3": { id: "3", title: "First sub", children: [] },
};
export const initialState: RootState = {
  items,
  videoIdBeingPlayed: undefined,
  searchTerm: "",
  options: {
    isSearchVisible: true,
  },
  x: 0,
  y: 0,
  itemBeingDraggedId: undefined,
};
