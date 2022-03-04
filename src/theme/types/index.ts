import { TColor } from "../color/types/TColor";
import { TTypography } from "../typography/types/TTypography";

export type TTheme = {
  theme: {
    color: TColor;
    typography: TTypography;
  };
};
