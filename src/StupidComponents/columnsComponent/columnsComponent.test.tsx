import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "react";
import { ColumnsComponent } from "./columnsComponent";

describe("Testing ColumsComponent", () => {
  describe("Type test", () => {
    expect(ColumnsComponent).toBeInstanceOf(Function);
  });

  describe("Basic markup test", () => {
    beforeEach(() => {
      const columsBlock = new ColumnsComponent(undefined);
      render(columsBlock.render());
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
      const columsBlock = new ColumnsComponent({ value: number });
      render(columsBlock.render());
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
