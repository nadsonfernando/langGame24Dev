import React from "react";
import { TColor } from "../../../theme/color/types/TColor";

import * as S from "./styles";

type Props = {
  value: string;
  bg: keyof TColor;
  color: keyof TColor;
  isUppercase?: boolean;
  onPress?: () => void;
};

export function Button({
  value,
  bg,
  color,
  isUppercase = false,
  onPress,
  ...props
}: Props) {
  return (
    <S.Wrapper bg={bg} onPress={onPress} {...props}>
      <S.Value isUppercase={isUppercase} color={color}>
        {value}
      </S.Value>
    </S.Wrapper>
  );
}
