import styled from "styled-components/native";

import { TWordContent } from "./types/TWordContent";

import { Text } from "../../../../shared/components/text";
import { Button } from "../../../../shared/components/button";

export const Wrapper = styled.View``;

export const WordsContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const WordContent = styled.View<TWordContent>`
  justify-content: center;
  align-items: center;
  padding: 4px;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, isHidden, isHide }) =>
    !isHidden || isHide ? "transparent" : theme.color.white};
`;

export const Word = styled(Text).attrs({
  size: "large",
})<TWordContent>`
  color: ${({ theme, isHidden }) =>
    isHidden ? "transparent" : theme.color.white};
`;

export const Option = styled(Button).attrs({
  bg: "white",
  color: "darkBlue",
})`
  width: 100%;
  height: 40px;
  border-radius: 15px;
`;
