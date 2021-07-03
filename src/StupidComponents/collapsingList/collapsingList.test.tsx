import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import { CollapsingList } from "./collapsingList";

describe("Testing CollapsingList", () => {
  describe("Testing type", () => {
    expect(CollapsingList).toBeInstanceOf(Function);
  });
  describe("Testing basic markup", () => {
    beforeEach(() => {
      render(<CollapsingList {...{}} />);
    });
    it("Have basic markup", () => {
      expect(screen.getByText("List")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
    });
  });

  describe("Testing functionality", () => {
    const inputProps: CollapseListComponentProps = {
      headerText: "Test",
      list: ["item1", "item2", "item3"],
    };
    beforeEach(() => {
      render(<CollapsingList {...inputProps} />);
    });
    it("Render list when user click on button", () => {
      userEvent.click(screen.getByText("Show list"));

      expect(screen.getByText("Test")).toBeInTheDocument();
      expect(screen.getByText("Collapse list")).toBeInTheDocument();
      expect(screen.getByTestId("ListOfItems")).toBeInTheDocument();
      expect(screen.getAllByTestId("Item").length).toBe(3);
    });
    it("Render list when user click on button", () => {
      userEvent.click(screen.getByText("Show list"));
      userEvent.click(screen.getByText("Collapse list"));

      expect(screen.getByText("Test")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
    });
  });
});
