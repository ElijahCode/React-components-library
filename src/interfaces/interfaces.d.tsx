interface HComponentProps {
  level?: number | undefined;
  text?: string | undefined;
}

interface TextParagraphComponentProps {
  style?: string | undefined;
  text?: string | undefined;
}

interface CollapseListComponentState {
  buttonState: boolean;
  list?: string[];
}

interface CollapseListComponentProps {
  headerText?: string | undefined;
  list?: string[];
}

interface ImageComponentProps {
  source?: string;
  align?: "none" | "left" | "right";
}

interface ColumnsComponentProps {
  value: number;
}
