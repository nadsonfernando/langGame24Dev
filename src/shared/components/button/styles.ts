import styled from "styled-components/native";
import { TColor } from "../../../theme/color/types/TColor";
import { TTheme } from "../../../theme/types";

import { Text } from "../text";
import { TValue } from "./types/TValue";
import { TWrapper } from "./types/TWrapper";

export const Wrapper = styled.TouchableOpacity<TWrapper>`
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ theme, bg }) => theme.color[bg]};
`;

export const Value = styled(Text).attrs({
  size: "small",
})<TValue>`
  font-weight: 700;
  margin: 8px 20px;
  color: ${({ theme, color }) => theme.color[color]};
  text-transform: ${({ isUppercase }) => (isUppercase ? "uppercase" : "none")};
`;
