import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { HOC } from "./HOC";
import { CollapsingList } from "../../StupidComponents/collapsingList/collapsingList";

describe("Testing HOC", () => {
  describe("Testing interface", () => {
    it("It's type if function", () => {
      expect(HOC).toBeInstanceOf(Function);
    });
  });

  describe("Testing functionality", () => {
    beforeEach(() => {
      const newProps: CollapseListComponentProps = {
        headerText: "TestList",
        list: ["item1", "item2", "item3", "item4"],
      };
      const CollapseListWithNewProps = HOC(CollapsingList, newProps);
      render(<CollapseListWithNewProps />);
    });

    it("Testing props changing", () => {
      expect(screen.getByText("TestList")).toBeInTheDocument();

      userEvent.click(screen.getByText("Show list"));

      expect(screen.getAllByTestId("Item").length).toBe(4);
    });

    it("Testing getting new props", () => {
      const newProps: CollapseListComponentProps = {
        headerText: "TestList",
        list: ["item1", "item2", "item3", "item4"],
      };
      const CollapseListWithNewProps = HOC(CollapsingList, newProps);
      expect(CollapseListWithNewProps.getProps()).toStrictEqual(newProps);
    });
  });
});
