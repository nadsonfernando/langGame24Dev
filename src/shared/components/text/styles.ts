import styled from "styled-components/native";

import { TTheme } from "../../../theme/types";
import { TTypographySize } from "../../../theme/typography/types/TTypographySize";

export const Text = styled.Text<TTheme & { size: keyof TTypographySize }>`
  color: ${({ theme }) => theme.color.black};

  font-size: ${({ theme, size }) =>
    theme.typography.size[size] || theme.typography.size.regular}px;
`;
