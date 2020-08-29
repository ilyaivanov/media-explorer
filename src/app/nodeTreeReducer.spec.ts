import { getInitialState, NodesContainer } from "./nodeTreeReducer";
import { drop } from "./nodeTreeReducer";

describe("having a default set of nodes", () => {
  const nodes = getInitialState();

  it("order should be 1 2 3", function () {
    expect(getChildrenTitles(nodes, 'HOME')).toEqual(["Root 1", "Root 2", "Root 3"]);
  });

  it("placing Root 3 before Root 1 should set Root 3 as first node", function () {
    const res = drop(nodes, {
      dropPlacement: "before",
      itemUnderId: "1",
      itemOverId: "3",
      rect: {} as any,
    });

    expect(getChildrenTitles(res, "HOME")).toEqual(["Root 3", "Root 1", "Root 2"]);
  });

  it("placing Root 3 after Root 1 should set Root 3 as second node", function () {
    const res = drop(nodes, {
      dropPlacement: "after",
      itemUnderId: "1",
      itemOverId: "3",
      rect: {} as any,
    });

    expect(getChildrenTitles(res, "HOME")).toEqual(["Root 1", "Root 3", "Root 2"]);
  });

  it("placing Root 3 inside of Root 1 should set Root 3 as first child of Root 1", function () {
    const res = drop(nodes, {
      dropPlacement: "inside",
      itemUnderId: "1",
      itemOverId: "3",
      rect: {} as any,
    });

    expect(getChildrenTitles(res, "HOME")).toEqual(["Root 1", "Root 2"]);
    expect(getChildrenTitles(res, "1")).toEqual(["Root 3", "Root 4", "Root 5"]);
  });
});

const getChildrenTitles = (nodes: NodesContainer, itemId: string) =>
  nodes[itemId].children.map((n) => nodes[n].title);
