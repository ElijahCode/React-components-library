import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "react";
import { Header } from "./hComponent";

describe("Testing Header component", () => {
  describe("It's function", () => {
    it("Test type", () => {
      expect(Header).toBeInstanceOf(Function);
    });
  });
  describe("Test basic markup", () => {
    beforeEach(() => {
      const h = new Header({});
      render(h.render());
    });
    it("Have h", () => {
      expect(screen.getByTestId("h1")).toBeInTheDocument();
      expect(screen.getByText("Text")).toBeInTheDocument();
    });
  });
  describe("Test advanced markup", () => {
    let hLevel = 1;
    beforeEach(() => {
      const h = new Header({
        level: hLevel,
        text: `h element with level ${hLevel}`,
      });
      render(h.render());
      hLevel += 1;
    });

    it("Have h1", () => {
      expect(screen.getByTestId("h1")).toBeInTheDocument();
      expect(screen.getByText("h element with level 1")).toBeInTheDocument();
    });
    it("Have h2", () => {
      expect(screen.getByTestId("h2")).toBeInTheDocument();
      expect(screen.getByText("h element with level 2")).toBeInTheDocument();
    });
    it("Have h3", () => {
      expect(screen.getByTestId("h3")).toBeInTheDocument();
      expect(screen.getByText("h element with level 3")).toBeInTheDocument();
    });
    it("Have h4", () => {
      expect(screen.getByTestId("h4")).toBeInTheDocument();
      expect(screen.getByText("h element with level 4")).toBeInTheDocument();
    });
    it("Have h5", () => {
      expect(screen.getByTestId("h5")).toBeInTheDocument();
      expect(screen.getByText("h element with level 5")).toBeInTheDocument();
    });
    it("Have h6", () => {
      expect(screen.getByTestId("h6")).toBeInTheDocument();
      expect(screen.getByText("h element with level 6")).toBeInTheDocument();
    });
  });
});
