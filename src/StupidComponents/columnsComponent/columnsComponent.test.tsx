import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ColumnsComponent } from "./columnsComponent";

describe("Testing ColumsComponent", () => {
  describe("Type test", () => {
    it("It's type is function", () => {
      expect(ColumnsComponent).toBeInstanceOf(Function);
    });
    it("It's have default props", () => {
      expect(ColumnsComponent.defaultProps).toStrictEqual({ value: 2 });
    });
  });

  describe("Basic markup test", () => {
    beforeEach(() => {
      render(<ColumnsComponent {...{}} />);
    });

    it("Have ColumnsBlock", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getByTestId("columnsBlock").style.display).toBe("flex");
      expect(screen.getByTestId("columnsBlock").style.justifyContent).toBe(
        "space-between"
      );
    });
  });

  describe("Advanced markup test", () => {
    let number = 1;
    beforeEach(() => {
      render(<ColumnsComponent {...{ value: number }} />);
      number += 1;
    });

    it("Have 1 column", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(1);
    });
    it("Have 2 column", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(2);
    });
    it("Have 3 column", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(3);
    });
    it("Have 4 column", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(4);
    });
    it("Have 5 column", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(5);
    });
  });
});
