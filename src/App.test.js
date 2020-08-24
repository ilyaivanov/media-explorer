import React from "react";
import {render, fireEvent, wait, cleanup} from "@testing-library/react";
import Viewport from "./Viewport";
import {fooBar} from "./constants";


describe("Having an app with six nodes and 500x500 px window size", () => {
  let node;
  beforeEach(function () {
    window.innerHeight = 500;
    window.innerWidth = 500;
    node = render(<Viewport />);
  });

  afterEach(cleanup);


  it("ViewBox should be 0 0 500 700", async () => {
    await waitForViewBox(node.container, "0 0 500 500");
  });

  it("on mousewhell down viewBox should shift 100 pixels down", async () => {
    fireEvent.wheel(document, { deltaY: 100 });

    await waitForViewBox(node.container, "0 100 500 500");
  });

  it("on mousewhell up viewBox should remain the same (not going up)", async () => {
    fireEvent.wheel(document, { deltaY: -100 });
    await waitForViewBox(node.container, "0 0 500 500");
  });

  it("on multiple mouse wheel down viewBox should not go lower than X ", async () => {
    // 110 * 6 + 20 * 5 + 15 * 2 - screenHeight (500) = 290
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });
    fireEvent.wheel(document, { deltaY: 100 });

    await waitForViewBox(node.container, "0 290 500 500");
  });
});
it("having a bigger screen that content height position should always be 0", async () => {
  window.innerHeight = 1500;
  window.innerWidth = 500;
  const node = render(<Viewport />);
  fireEvent.wheel(document, { deltaY: -100 });
  await waitForViewBox(node.container, "0 0 500 1500");
})
it("having a bigger screen that content height position should always be 0", async () => {
  window.innerHeight = 1500;
  window.innerWidth = 500;
  const node = render(<Viewport />);
  fireEvent.wheel(document, { deltaY: 100 });
  await waitForViewBox(node.container, "0 0 500 1500");
})


//candidates for a Page Object pattern
const waitForViewBox = (container, expectedViewBox) =>
  wait(
    () => {
      expect(container.querySelector("#main")).toHaveAttribute(
        "viewBox",
        expectedViewBox
      );
    },
    {
      timeout: 500,
    }
  );
