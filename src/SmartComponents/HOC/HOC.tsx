export function HOC(Element: any, newProps: any) {
  const ElementWithNewProps = Element;
  Object.keys(ElementWithNewProps.defaultProps).forEach((key) => {
    if (key === "name") {
      return;
    }
    ElementWithNewProps.defaultProps[key] = newProps[key];
  });
  ElementWithNewProps.getProps = (): any => newProps;
  return ElementWithNewProps;
}
