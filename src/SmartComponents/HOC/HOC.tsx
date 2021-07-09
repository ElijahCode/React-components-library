import React from "react";

interface HOCOutPutValue extends React.ComponentClass {
  getProps(): React.ComponentClass["defaultProps"];
}

export function HOC<K extends React.ComponentClass["defaultProps"]>(
  Element: React.ComponentClass,
  newProps: K
): HOCOutPutValue {
  class NewElement extends Element {
    static defaultProps = newProps;

    static getProps() {
      return newProps;
    }
  }
  return NewElement;
}
