import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "react";
import { ImageComponent } from "./imageComponent";

describe("Testing imageComponent", () => {
  describe("Test type", () => {
    expect(ImageComponent).toBeInstanceOf(Function);
  });

  describe("Testing basic markup", () => {
    beforeEach(() => {
      const img = new ImageComponent({});
      render(img.render());
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
      const img = new ImageComponent(imageComponentProps);
      render(img.render());
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
