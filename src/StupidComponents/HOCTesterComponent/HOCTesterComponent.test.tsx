import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import { HOCTesterComponent } from "./HOCTesterComponent";

describe("HOCTesterComponent testing", () => {
  describe("Testing 1st stage markup", () => {
    beforeEach(() => {
      render(<HOCTesterComponent />);
    });

    it("Have HOCTesterBlock", () => {
      expect(screen.getByTestId("HOCTesterBlock")).toBeInTheDocument();
    });
    it("Have text", () => {
      expect(
        screen.getByText("Please, choose element name:")
      ).toBeInTheDocument();
    });
    it("Have select", () => {
      expect(screen.getByTestId("Selector")).toBeInTheDocument();
    });
    it("Have all variants in selector", () => {
      expect(screen.getByText("Collapsing list")).toBeInTheDocument();
      expect(screen.getByText("Columns component")).toBeInTheDocument();
      expect(screen.getByText("Gap block")).toBeInTheDocument();
      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Image component")).toBeInTheDocument();
      expect(screen.getByText("Text paragraph")).toBeInTheDocument();
    });
    it("Have confirm name button", () => {
      expect(screen.getByText("Confirm name")).toBeInTheDocument();
    });
  });
  describe("Testing 2nd stage markup", () => {
    beforeEach(() => {
      render(<HOCTesterComponent />);
    });

    it("Testing for collapse list component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "collapsing list",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      expect(screen.getByTestId("HOCTesterBlock")).toBeInTheDocument();
      expect(
        screen.getByText("Please, choose element properties:")
      ).toBeInTheDocument();
      expect(screen.getByTestId("input_block1")).toBeInTheDocument();
      expect(screen.getByTestId("input_block2")).toBeInTheDocument();
      expect(screen.getByText("Confirm props")).toBeInTheDocument();
    });
  });

  describe("Testing 3rd stage markup", () => {
    beforeEach(() => {
      render(<HOCTesterComponent />);
    });

    it("Testing for collapse list component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "collapsing list",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.type(screen.getByTestId("input1"), "Test list");
      userEvent.type(
        screen.getByTestId("input2"),
        "Item1 Item2 Item3 Item4 Item5"
      );
      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByText("Test list")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();

      userEvent.click(screen.getByText("Show list"));

      expect(screen.getByText("Collapse list")).toBeInTheDocument();
      expect(screen.getByTestId("ListOfItems")).toBeInTheDocument();
      expect(screen.getAllByTestId("Item").length).toBe(5);
    });
  });
});
