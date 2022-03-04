import styled from "styled-components/native";
import { Button } from "../../shared/components/button";
import { Text } from "../../shared/components/text";

import { TTheme } from "../../theme/types";

export const Wrapper = styled.SafeAreaView<TTheme>`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkBlue};
`;

export const Title = styled(Text).attrs({
  size: "small",
})<TTheme>`
  opacity: 0.8;
  margin-top: 16px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.View``;

export const Header = styled.View`
  margin-top: 20%;
`;

export const OptionsContent = styled.View`
  margin-top: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-around;
`;

export const OptionButton = styled(Button).attrs(({ theme }) => ({
  bg: "white",
  color: "darkBlue",
  shadowColor: theme.color.black,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
}))`
  margin: 5px;
  height: 40px;
  border-radius: 12px;
`;

export const ContinueButton = styled(Button).attrs({
  bg: "lightBlue",
  color: "white",
  radius: 10,
  isUppercase: true,
})`
  position: absolute;
  bottom: 60px;
  left: 16px;
  right: 16px;
`;
