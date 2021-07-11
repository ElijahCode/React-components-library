import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { CreatorComponent } from "./CreatorComponent";

describe("CreatorComponent testing", () => {
  describe("Test type", () => {
    expect(CreatorComponent).toBeInstanceOf(Function);
  });

  const promptReturnValues = [
    "collapseList-Test List-item item item",
    "columns-4",
    "gapBlock",
    "h-Header-2",
    "image-http://some_source/-left",
    "text-Test text-bold",
  ];

  describe("Test basic markup", () => {
    window.prompt = jest.fn();

    let counter = 0;

    beforeEach(() => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce(promptReturnValues[counter])
        .mockReturnValueOnce("");

      render(<CreatorComponent {...{}} />);

      counter += 1;
    });

    it("Must render collapseList", () => {
      expect(screen.getByTestId("creatorBlock")).toBeInTheDocument();
      expect(screen.getByText("Test List")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
    });
    it("Must render columns", () => {
      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(4);
    });
    it("Must render gapBlock", () => {
      expect(screen.getByTestId("gapDiv")).toBeInTheDocument();
      expect(screen.getByTestId("gapHorizontalLine")).toBeInTheDocument();
    });
    it("Must render h", () => {
      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Header").matches("h2")).toBeTruthy();
    });
    it("Must render image", () => {
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("left");
    });
    it("Must render text", () => {
      expect(screen.getByText("Test text")).toBeInTheDocument();
      expect(screen.getByText("Test text").style.fontWeight).toBe("bold");
    });
  });

  describe("Test advanced markup", () => {
    window.prompt = jest.fn();

    it("Must contanin all stupid components", () => {
      promptReturnValues.forEach((el) =>
        (window.prompt as jest.Mock).mockReturnValueOnce(el)
      );

      (window.prompt as jest.Mock).mockReturnValueOnce("");

      render(<CreatorComponent {...{}} />);

      expect(screen.getByTestId("creatorBlock")).toBeInTheDocument();
      expect(screen.getByText("Test List")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();

      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(4);

      expect(screen.getByTestId("gapDiv")).toBeInTheDocument();
      expect(screen.getByTestId("gapHorizontalLine")).toBeInTheDocument();

      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Header").matches("h2")).toBeTruthy();

      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("left");

      expect(screen.getByText("Test text")).toBeInTheDocument();
      expect(screen.getByText("Test text").style.fontWeight).toBe("bold");
    });
  });
});
