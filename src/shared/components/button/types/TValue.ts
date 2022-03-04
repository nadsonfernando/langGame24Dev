import { TColor } from "../../../../theme/color/types/TColor";
import { TTheme } from "../../../../theme/types";

export type TValue = TTheme & {
  color: keyof TColor;
  isUppercase: boolean;
};
