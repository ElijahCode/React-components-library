import * as React from "react";
import { HOC } from "../../SmartComponents/HOC/HOC";
import { CollapsingList } from "../collapsingList/collapsingList";
import { ColumnsComponent } from "../columnsComponent/columnsComponent";
import { GapBlock } from "../gapBlock/gapBLock";
import { Header } from "../hComponent/hComponent";
import { ImageComponent } from "../imageComponent/imageComponent";
import { TextParagraph } from "../textParagraph/textParagraph";

export class HOCTesterComponent extends React.Component<
  Record<string, unknown>,
  HOCTesterComponentState
> {
  state: HOCTesterComponentState = {
    isComponentsNameKnown: false,
    isComponentsPropsKnown: false,
    componentName: "",
    componentProps: {},
  };

  components = [
    CollapsingList,
    ColumnsComponent,
    GapBlock,
    Header,
    ImageComponent,
    TextParagraph,
  ];

  chooseComponentNameButtonClick = (): void => {
    this.setState(() => ({ isComponentsNameKnown: true }));
  };

  chooseComponentPropsButtonClick = (): void => {
    this.setState(() => ({
      isComponentsPropsKnown: true,
    }));
  };

  tryAgainButtonClick = (): void => {
    this.setState(() => ({
      isComponentsNameKnown: false,
      isComponentsPropsKnown: false,
      componentName: "",
      componentProps: {},
    }));
  };

  selectHandler = (event: React.ChangeEvent): void => {
    this.setState({
      componentName: (event.target as HTMLSelectElement).value,
    });
  };

  inputHandler = (event: React.ChangeEvent): void => {
    const inputClass = event.target.className;
    const newComponentProps = { ...this.state.componentProps };
    if (
      this.state.componentName === "collapsing list" &&
      inputClass === "list"
    ) {
      newComponentProps[
        inputClass
      ] = (event.target as HTMLInputElement).value.split(" ");
    } else {
      newComponentProps[inputClass] = (event.target as HTMLInputElement).value;
    }
    this.setState({
      componentProps: newComponentProps,
    });
  };

  renderComponentPropertiesBlock(): JSX.Element {
    const Component = this.components.filter(
      (el) => el.defaultProps.name === this.state.componentName
    )[0];
    return (
      <>
        {Object.keys(Component.defaultProps).map((key, index) => {
          if (key === "name") {
            return null;
          }
          return (
            <div key={index} data-testid={`input_block${index}`}>
              <p>Enter {key} props</p>
              <input
                data-testid={`input${index}`}
                type="text"
                onChange={this.inputHandler}
                className={`${key}`}
              />
            </div>
          );
        })}
      </>
    );
  }

  renderComponent = (): JSX.Element => {
    const Component = this.components.filter(
      (el) => el.defaultProps.name === this.state.componentName
    )[0];
    const props = { ...this.state.componentProps };
    const ComponentWithProps = HOC(Component, props);
    return <ComponentWithProps />;
  };

  render(): JSX.Element {
    let layout = <div></div>;
    if (!this.state.isComponentsNameKnown) {
      layout = (
        <div data-testid="HOCTesterBlock">
          <p>Please, choose element name:</p>
          <select
            data-testid="Selector"
            value={this.state.componentName}
            name="selectComponent"
            id="selectComponent"
            onChange={this.selectHandler}
          >
            <option>Choose component</option>
            <option value="collapsing list">Collapsing list</option>
            <option value="columns component">Columns component</option>
            <option value="gap block">Gap block</option>
            <option value="header">Header</option>
            <option value="image component">Image component</option>
            <option value="text paragraph">Text paragraph</option>
          </select>
          <button onClick={this.chooseComponentNameButtonClick}>
            Confirm name
          </button>
        </div>
      );
    } else if (this.state.isComponentsPropsKnown) {
      layout = (
        <>
          {this.renderComponent()}
          <p>Press button to try again</p>
          <button onClick={this.tryAgainButtonClick}>Try again</button>
        </>
      );
    } else if (this.state.isComponentsNameKnown) {
      layout = (
        <div data-testid="HOCTesterBlock">
          <p>Please, choose element properties:</p>
          {this.renderComponentPropertiesBlock()}
          <button onClick={this.chooseComponentPropsButtonClick}>
            Confirm props
          </button>
        </div>
      );
    }
    return layout;
  }
}
