import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "react";
import userEvent from "@testing-library/user-event";
import { CollapsingList } from "./collapsingList";

describe("Testing CollapsingList", () => {
  describe("Testing type", () => {
    expect(CollapsingList).toBeInstanceOf(Function);
  });
  describe("Testing basic markup", () => {
    beforeEach(() => {
      const collapseList = new CollapsingList({});
      render(collapseList.render());
    });
    it("Have basic markup", () => {
      expect(screen.getByText("List")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
    });
  });

  describe("Testing functionality", () => {
    let collapseList: CollapsingList;
    const inputProps: CollapseListComponentProps = {
      headerText: "Test",
      list: ["item1", "item2", "item3"],
    };
    beforeEach(() => {
      collapseList = new CollapsingList(inputProps);
      render(collapseList.render());
    });
    it("Render list when user click on button", () => {
      userEvent.click(screen.getByText("Show list"));
      console.log(document.body.innerHTML);

      expect(screen.getByText("Test")).toBeInTheDocument();
      expect(screen.getByText("Collapse list")).toBeInTheDocument();
      expect(screen.getByTestId("ListOfItems")).toBeInTheDocument();
      expect(screen.getAllByTestId("Item").length).toBe(3);
    });
    it.skip("Render list when user click on button", () => {
      collapseList.click();
      collapseList.click();

      expect(screen.getByText("Test")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
      expect(screen.getByTestId("ListOfItems")).not.toBeInTheDocument();
    });
  });
});
