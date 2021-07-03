import * as React from "react";
import { CollapsingList } from "../StupidComponents/collapsingList/collapsingList";
import { ColumnsComponent } from "../StupidComponents/columnsComponent/columnsComponent";
import { GapBlock } from "../StupidComponents/gapBlock/gapBLock";
import { Header } from "../StupidComponents/hComponent/hComponent";
import { ImageComponent } from "../StupidComponents/imageComponent/imageComponent";
import { TextParagraph } from "../StupidComponents/textParagraph/textParagraph";

export class CreatorComponent extends React.Component<
  Record<string, unknown>,
  Record<string, unknown>
> {
  // eslint-disable-next-line class-methods-use-this
  render(): JSX.Element {
    const components: JSX.Element[] = [];
    let answer;
    let key = 0;
    do {
      answer = prompt();
      if (answer === "") {
        break;
      }

      answer = (answer as string).split("-");
      const [elementName, firstArgument, secondArgument] = answer;
      switch (elementName) {
        case "collapseList":
          components.push(
            <div key={key}>
              {new CollapsingList({
                headerText: firstArgument,
                list: secondArgument.split(" "),
              }).render()}
            </div>
          );
          key += 1;
          break;
        case "columns":
          components.push(
            <div key={key}>
              {new ColumnsComponent({
                value: Number(firstArgument),
              }).render()}
            </div>
          );
          key += 1;
          break;
        case "gapBlock":
          components.push(<div key={key}>{new GapBlock({}).render()}</div>);
          key += 1;
          break;
        case "h":
          components.push(
            <div key={key}>
              {new Header({
                text: firstArgument,
                level: Number(secondArgument),
              }).render()}
            </div>
          );
          key += 1;
          break;
        case "image":
          components.push(
            <div key={key}>
              {new ImageComponent({
                source: firstArgument,
                align: secondArgument,
              }).render()}
            </div>
          );
          key += 1;
          break;
        case "text":
          components.push(
            <div key={key}>
              {new TextParagraph({
                text: firstArgument,
                style: secondArgument,
              }).render()}
            </div>
          );
          key += 1;
          break;
        default:
          break;
      }
    } while (answer !== undefined);

    const resultBlock = <div data-testid="creatorBlock">{components}</div>;

    return resultBlock;
  }
}
