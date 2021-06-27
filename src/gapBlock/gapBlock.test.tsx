import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "react";
import { GapBlock } from "./gapBLock";

describe("Testing GapBlock component", () => {
  describe("Test type", () => {
    expect(GapBlock).toBeInstanceOf(Function);
  });
  describe("Testing markup", () => {
    beforeEach(() => {
      const gapBlock = new GapBlock({});
      render(gapBlock.render());
    });

    it("Have gap div", () => {
      expect(screen.getByTestId("gapDiv")).toBeInTheDocument();
      expect(document.getElementsByTagName("div")[1].style.height).toBe("50px");
    });

    it("Have gorizontal line", () => {
      expect(screen.getByTestId("gapHorizontalLine")).toBeInTheDocument();
    });
  });
});
