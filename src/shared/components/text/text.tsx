import React from "react";

import { TTypographySize } from "../../../theme/typography/types/TTypographySize";

import * as S from "./styles";

type Props = {
  size: keyof TTypographySize;
  children: JSX.Element | string;
};

export function Text({ children, ...props }: Props) {
  return <S.Text {...props}>{children}</S.Text>;
}
