import * as React from "react";
import styled from "styled-components";
import { ThemeType } from "../../pages/_app";

export interface EventHandlerProps {}

interface WrapperProps {
  isChoosen: boolean;
  isCorrectValue: boolean;
  showAnswer: boolean;
}

export interface NumberProps {
  value: number;
  onClick: () => void;
  styledProps: WrapperProps;
}

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${(props: any): string => props.theme.colors.grey};
  color: ${(props: any): string => props.theme.colors.black};
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    border: 1px solid ${(props: any): string => props.theme.colors.yellow};
  }
  ${({ isChoosen, isCorrectValue, showAnswer, ...rest }: any): string => {
    // логика отображения цветов ячеек
    let style;
    switch (true) {
      case showAnswer && isCorrectValue && isChoosen:
        style = `
          background: ${rest.theme.colors.green};
          animation: pulse 1s infinite linear;
        `;
        break;
      case showAnswer && isChoosen:
        style = `
          background: ${rest.theme.colors.red};
        `;
        break;
      case isChoosen:
        style = `
          background: ${rest.theme.colors.yellow};
          border: 2px solid white !important;
        `;
        break;
      default:
        style = "";
    }
    return style;
  }};
`;

export default function Number({ value, styledProps, onClick }: NumberProps) {
  return (
    <Wrapper onClick={onClick} {...styledProps}>
      <div>{value + 1}</div>
    </Wrapper>
  );
}
