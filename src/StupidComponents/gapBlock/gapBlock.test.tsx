import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { GapBlock } from "./gapBLock";

describe("Testing GapBlock component", () => {
  describe("Test type", () => {
    it("It's type is function", () => {
      expect(GapBlock).toBeInstanceOf(Function);
    });
    it("It have default props", () => {
      expect(GapBlock.defaultProps).toStrictEqual({
        name: "gap block",
      });
    });
  });
  describe("Testing markup", () => {
    beforeEach(() => {
      render(<GapBlock {...{}} />);
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
