import styled from "styled-components/native";

import { TWordContent } from "./types/TWordContent";
import { Text } from "../../../../shared/components/text";

export const Wrapper = styled.View``;

export const WordsContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const WordContent = styled.View<TWordContent>`
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, isDraft }) =>
    !isDraft ? "transparent" : theme.color.white};
`;

export const Word = styled(Text).attrs({
  size: "extraLarge",
})<TWordContent>`
  text-align: center;
  font-weight: ${({ isDraft }) => (isDraft ? 700 : 300)};
  color: ${({ theme }) => theme.color.white};
`;
