import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { TextParagraph } from "./textParagraph";

describe("Test TextParagraph component", () => {
  describe("Test type", () => {
    it("It's type is function", () => {
      expect(TextParagraph).toBeInstanceOf(Function);
    });
    it("It have a default props", () => {
      expect(TextParagraph.defaultProps).toStrictEqual({
        text: "Text",
        style: "normal",
      });
    });
  });
  describe("Testing basic markup", () => {
    beforeEach(() => {
      render(<TextParagraph {...{}} />);
    });
    it("Have p with text: Text", () => {
      expect(screen.getByText("Text")).toBeInTheDocument();
    });
  });
  describe("Testing advanced markup", () => {
    const styles = ["normal", "bold", "cursive"];
    let index = 0;
    beforeEach(() => {
      render(
        <TextParagraph
          {...{
            style: styles[index],
            text: "Some text",
          }}
        />
      );
      index += 1;
    });
    it("Have p with font-style: normal", () => {
      expect(screen.getByText("Some text")).toBeInTheDocument();
      expect(document.getElementsByTagName("p")[0].style.fontStyle).toBe(
        "normal"
      );
    });
    it("Have p with font-weight: bold", () => {
      expect(screen.getByText("Some text")).toBeInTheDocument();
      expect(document.getElementsByTagName("p")[0].style.fontWeight).toBe(
        "bold"
      );
    });
    it("Have p with font-style: italic", () => {
      expect(screen.getByText("Some text")).toBeInTheDocument();
      expect(document.getElementsByTagName("p")[0].style.fontStyle).toBe(
        "italic"
      );
    });
  });
});
