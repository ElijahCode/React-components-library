import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import { CreatorComponent } from "./CreatorComponent";

describe("CreatorComponent testing", () => {
  describe("Test type", () => {
    expect(CreatorComponent).toBeInstanceOf(Function);
  });

  describe("Test basic markup", () => {
    window.prompt = jest.fn();

    it("Must render collapseList", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("collapseList-Test List-item item item")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByTestId("creatorBlock")).toBeInTheDocument();
      expect(screen.getByText("Test List")).toBeInTheDocument();
      expect(screen.getByText("Show list")).toBeInTheDocument();
    });
    it("Must render columns", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("columns-4")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByTestId("columnsBlock")).toBeInTheDocument();
      expect(screen.getAllByTestId("column").length).toBe(4);
    });
    it("Must render gapBlock", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("gapBlock")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByTestId("gapDiv")).toBeInTheDocument();
      expect(screen.getByTestId("gapHorizontalLine")).toBeInTheDocument();
    });
    it("Must render h", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("h-Header-2")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Header").matches("h2")).toBeTruthy();
    });
    it("Must render image", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("image-http://some_source/-left")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("left");
    });
    it("Must render text", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("text-Test text-bold")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

      expect(screen.getByText("Test text")).toBeInTheDocument();
      expect(screen.getByText("Test text").style.fontWeight).toBe("bold");
    });
  });

  describe("Test advanced markup", () => {
    window.prompt = jest.fn();

    it("Must contanin all stupid components", () => {
      (window.prompt as jest.Mock)
        .mockReturnValueOnce("collapseList-Test List-item item item")
        .mockReturnValueOnce("columns-4")
        .mockReturnValueOnce("gapBlock")
        .mockReturnValueOnce("h-Header-2")
        .mockReturnValueOnce("image-http://some_source/-left")
        .mockReturnValueOnce("text-Test text-bold")
        .mockReturnValueOnce("");

      const comp = new CreatorComponent({});
      render(comp.render());

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
