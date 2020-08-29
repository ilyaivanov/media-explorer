import { getInitialState } from "./nodeTreeReducer";
import { drop } from "./nodeTreeReducer";

describe("having a default set of nodes", () => {
  const nodes = getInitialState();

  it("order should be 1 2 3", function () {
    expect(nodes.map((n) => n.title)).toEqual(["Root 1", "Root 2", "Root 3"]);
  });

  it("placing Root 3 before Root 1 should set Root 3 as first node", function () {
    const res = drop(nodes, {
      dropPlacement: "before",
      itemUnderId: "1",
      itemOverId: "3",
      rect: {} as any,
    });

    expect(res.map((n) => n.title)).toEqual(["Root 3", "Root 1", "Root 2"]);
  });

  it("having a default set of nodes placing Root 3 after Root 1 should set Root 3 as second node", function () {
    const res = drop(nodes, {
      dropPlacement: "after",
      itemUnderId: "1",
      itemOverId: "3",
      rect: {} as any,
    });

    expect(res.map((n) => n.title)).toEqual(["Root 1", "Root 3", "Root 2"]);
  });
});
