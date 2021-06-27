interface HComponentProps {
  [key: string]: any;
  level?: number | undefined;
  text?: string | undefined;
}

interface TextParagraphComponentProps {
  [key: string]: any;
  style?: string | undefined;
  text?: string | undefined;
}

interface CollapseListComponentProps {
  [key: string]: any;
  headerText?: string | undefined;
  list?: string[];
}

interface ImageComponentProps {
  [key: string]: any;
  source?: string;
  align?: "none" | "left" | "right";
}

interface ColumnsComponentProps {
  [key: string]: any;
  value: number;
}
