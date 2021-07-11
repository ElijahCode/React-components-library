import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Header } from "./hComponent";

describe("Testing Header component", () => {
  describe("It's function", () => {
    it("Test type", () => {
      expect(Header).toBeInstanceOf(Function);
    });
    it("It have defalut props", () => {
      expect(Header.defaultProps).toStrictEqual({
        name: "header",
        level: 1,
        text: "Text",
      });
    });
  });
  describe("Test basic markup", () => {
    beforeEach(() => {
      render(<Header {...{}} />);
    });
    it("Have h", () => {
      expect(screen.getByTestId("h1")).toBeInTheDocument();
      expect(screen.getByText("Text")).toBeInTheDocument();
    });
  });
  describe("Test advanced markup", () => {
    let hLevel = 1;
    beforeEach(() => {
      render(
        <Header
          {...{
            level: hLevel,
            text: `h element with level ${hLevel}`,
          }}
        />
      );
      hLevel += 1;
    });

    it("Have h1", () => {
      expect(screen.getByTestId("h1")).toBeInTheDocument();
      expect(screen.getByTestId("h1").matches("h1")).toBeTruthy();
      expect(screen.getByText("h element with level 1")).toBeInTheDocument();
    });
    it("Have h2", () => {
      expect(screen.getByTestId("h2")).toBeInTheDocument();
      expect(screen.getByTestId("h2").matches("h2")).toBeTruthy();
      expect(screen.getByText("h element with level 2")).toBeInTheDocument();
    });
    it("Have h3", () => {
      expect(screen.getByTestId("h3")).toBeInTheDocument();
      expect(screen.getByTestId("h3").matches("h3")).toBeTruthy();
      expect(screen.getByText("h element with level 3")).toBeInTheDocument();
    });
    it("Have h4", () => {
      expect(screen.getByTestId("h4")).toBeInTheDocument();
      expect(screen.getByTestId("h4").matches("h4")).toBeTruthy();
      expect(screen.getByText("h element with level 4")).toBeInTheDocument();
    });
    it("Have h5", () => {
      expect(screen.getByTestId("h5")).toBeInTheDocument();
      expect(screen.getByTestId("h5").matches("h5")).toBeTruthy();
      expect(screen.getByText("h element with level 5")).toBeInTheDocument();
    });
    it("Have h6", () => {
      expect(screen.getByTestId("h6")).toBeInTheDocument();
      expect(screen.getByTestId("h6").matches("h6")).toBeTruthy();
      expect(screen.getByText("h element with level 6")).toBeInTheDocument();
    });
  });
});
