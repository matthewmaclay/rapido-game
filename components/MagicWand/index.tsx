import * as React from "react";
import styled from "styled-components";
import { ThemeType } from "../../pages/_app";

export interface EventHandlerProps {}

interface WrapperProps {
  isChoosen: boolean;
  isSetedValue: boolean;
  showAnswer: boolean;
}

export interface NumberProps {
  value: number;
  onClick: () => void;
  styledProps: WrapperProps;
}

const Wrapper = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
  &:hover svg {
    fill: ${props => props.theme.colors.yellow};
  }
`;

export default function MagicWand({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0716 0.524902C11.4266 0.524902 11.7144 0.812719 11.7144 1.16776V3.71423C11.7144 4.06927 11.4266 4.35709 11.0716 4.35709C10.7165 4.35709 10.4287 4.06927 10.4287 3.71423V1.16776C10.4287 0.812719 10.7165 0.524902 11.0716 0.524902ZM15.3831 3.52589C15.6342 3.27484 15.6342 2.86781 15.3831 2.61676C15.1321 2.3657 14.7251 2.3657 14.474 2.61676L13.1883 3.90247C12.9372 4.15352 12.9372 4.56056 13.1883 4.81161C13.4393 5.06266 13.8464 5.06266 14.0974 4.81161L15.3831 3.52589ZM8.71965 10.1893C8.9707 9.93829 8.9707 9.53126 8.71965 9.28021C8.4686 9.02916 8.06156 9.02916 7.81051 9.28021L0.240046 16.8507C-0.011005 17.1017 -0.011005 17.5088 0.240046 17.7598C0.491098 18.0109 0.898132 18.0109 1.14918 17.7598L8.71965 10.1893ZM11.7144 10.7857C11.7144 10.4306 11.4266 10.1428 11.0716 10.1428C10.7165 10.1428 10.4287 10.4306 10.4287 10.7857V12.6678C10.4287 13.0228 10.7165 13.3107 11.0716 13.3107C11.4266 13.3107 11.7144 13.0228 11.7144 12.6678V10.7857ZM13.6426 6.9285C13.6426 6.57346 13.9304 6.28564 14.2854 6.28564H16.8569C17.2119 6.28564 17.4997 6.57346 17.4997 6.9285C17.4997 7.28354 17.2119 7.57136 16.8569 7.57136H14.2854C13.9304 7.57136 13.6426 7.28354 13.6426 6.9285ZM5.28544 6.28564C4.9304 6.28564 4.64258 6.57346 4.64258 6.9285C4.64258 7.28354 4.9304 7.57136 5.28544 7.57136H7.85686C8.2119 7.57136 8.49972 7.28354 8.49972 6.9285C8.49972 6.57346 8.2119 6.28564 7.85686 6.28564H5.28544ZM13.1883 9.04534C13.4393 8.79429 13.8464 8.79429 14.0974 9.04534L15.3831 10.3311C15.6342 10.5821 15.6342 10.9891 15.3831 11.2402C15.1321 11.4912 14.7251 11.4912 14.474 11.2402L13.1883 9.95448C12.9372 9.70343 12.9372 9.2964 13.1883 9.04534ZM7.66872 2.61676C7.41766 2.3657 7.01063 2.3657 6.75958 2.61676C6.50853 2.86781 6.50853 3.27484 6.75958 3.52589L8.04529 4.81161C8.29634 5.06266 8.70338 5.06266 8.95443 4.81161C9.20548 4.56056 9.20548 4.15352 8.95443 3.90247L7.66872 2.61676Z"
        />
      </svg>
    </Wrapper>
  );
}
