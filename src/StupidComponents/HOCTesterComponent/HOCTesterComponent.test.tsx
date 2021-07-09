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

    it("Testing for collumns component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "columns component",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      expect(screen.getByTestId("HOCTesterBlock")).toBeInTheDocument();
      expect(
        screen.getByText("Please, choose element properties:")
      ).toBeInTheDocument();
      expect(screen.getByTestId("input_block1")).toBeInTheDocument();
      expect(screen.getByText("Confirm props")).toBeInTheDocument();
    });

    it("Testing for gap block", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), ["gap block"]);
      userEvent.click(screen.getByText("Confirm name"));

      expect(screen.getByTestId("HOCTesterBlock")).toBeInTheDocument();
      expect(
        screen.getByText("Please, choose element properties:")
      ).toBeInTheDocument();
      expect(screen.getByText("Confirm props")).toBeInTheDocument();
    });

    it("Testing for header component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), ["header"]);
      userEvent.click(screen.getByText("Confirm name"));

      expect(screen.getByTestId("HOCTesterBlock")).toBeInTheDocument();
      expect(
        screen.getByText("Please, choose element properties:")
      ).toBeInTheDocument();
      expect(screen.getByTestId("input_block1")).toBeInTheDocument();
      expect(screen.getByTestId("input_block2")).toBeInTheDocument();
      expect(screen.getByText("Confirm props")).toBeInTheDocument();
    });

    it("Testing for image component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "image component",
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

    it("Testing for text paragraph component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "text paragraph",
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

    it("Testing for columns component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "columns component",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.type(screen.getByTestId("input1"), "3");

      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(3);
    });

    it("Testing for gap block component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), ["gap block"]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByTestId("gapDiv")).toBeInTheDocument();
      expect(screen.getByTestId("gapHorizontalLine")).toBeInTheDocument();
    });

    it("Testing for header component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), ["header"]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.type(screen.getByTestId("input1"), "1");
      userEvent.type(screen.getByTestId("input2"), "Test header");
      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByTestId("h1")).toBeInTheDocument();
      expect(screen.getByTestId("h1").matches("h1")).toBeTruthy();
      expect(screen.getByText("Test header")).toBeInTheDocument();
    });

    it("Testing for image component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "image component",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.type(screen.getByTestId("input1"), "left");
      userEvent.type(screen.getByTestId("input2"), "http://some_source/");
      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("left");
    });

    it("Testing for text paragraph component", () => {
      userEvent.selectOptions(screen.getByTestId("Selector"), [
        "text paragraph",
      ]);
      userEvent.click(screen.getByText("Confirm name"));

      userEvent.type(screen.getByTestId("input1"), "Test text");
      userEvent.type(screen.getByTestId("input2"), "bold");
      userEvent.click(screen.getByText("Confirm props"));

      expect(screen.getByText("Test text")).toBeInTheDocument();
      expect(document.getElementsByTagName("p")[0].style.fontWeight).toBe(
        "bold"
      );
    });
  });
});
