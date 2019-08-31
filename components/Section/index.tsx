import * as React from "react";
import styled from "styled-components";
import { number } from "prop-types";

export interface SectionProps {
  title: number;
  amount: number;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  margin-bottom: 15px;
`;
const ChildrenWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Head = styled.div`
  margin-bottom: 10px;
  padding-left: 5px;
`;

const Title = styled.div`
  display: inline-block;
  color: ${(props: any): string => props.theme.colors.black};
  margin-right: 10px;
`;

const Amount = styled.div`
  display: inline-block;
  color: ${(props: any): string => props.theme.colors.black};
  opacity: 0.5;
`;

export default function Section({ title, amount, children }: SectionProps) {
  return (
    <Wrapper>
      <Head>
        <Title>Поле {title}</Title>
        <Amount>
          Отметьте {amount} {amount == 1 ? "число" : "чисел"}
        </Amount>
      </Head>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}
