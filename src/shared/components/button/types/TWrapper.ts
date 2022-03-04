import { TTheme } from "../../../../theme/types";
import { TColor } from "../../../../theme/color/types/TColor";

export type TWrapper = TTheme & {
  bg: keyof TColor;
};
