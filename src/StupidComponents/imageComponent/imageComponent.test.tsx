import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ImageComponent } from "./imageComponent";

describe("Testing imageComponent", () => {
  describe("Test type", () => {
    it("It's type is function", () => {
      expect(ImageComponent).toBeInstanceOf(Function);
    });
    it("It's have default props", () => {
      expect(ImageComponent.defaultProps).toStrictEqual({
        name: "image component",
        textAlign: "none",
        imageSource: "",
      });
    });
  });
  describe("Testing basic markup", () => {
    beforeEach(() => {
      render(<ImageComponent {...{}} />);
    });
    it("Have img", () => {
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect(screen.getByTestId("image").style.float).toBe("none");
    });
  });
  describe("Testing advanced markup", () => {
    const floats = ["none", "right", "left"];
    let index = 0;
    beforeEach(() => {
      const imageComponentProps: ImageComponentProps = {
        source: "http://some_source/",
        align: floats[index] as "none" | "right" | "left",
      };
      render(<ImageComponent {...imageComponentProps} />);
      index += 1;
    });

    it("Align is none", () => {
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("none");
    });

    it("Align is right", () => {
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("right");
    });
    it("Align is left", () => {
      expect(screen.getByTestId("image")).toBeInTheDocument();
      expect((screen.getByTestId("image") as HTMLImageElement).src).toBe(
        "http://some_source/"
      );
      expect(screen.getByTestId("image").style.float).toBe("left");
    });
  });
});
