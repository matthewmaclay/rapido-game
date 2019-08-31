import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props: any): string => props.theme.colors.white};
  max-width: 400px;
  margin: auto;
  padding: 14px 11px;
  border-radius: 3px;
`;

export const Submitbutton = styled.div`
  width: 178px;
  height: 43px;
  display: flex;
  border: 1px solid ${(props: any): string => props.theme.colors.grey};
  color: ${(props: any): string => props.theme.colors.black};
  border-radius: 40px;
  font-size: 14px;
  justify-content: center;
  margin: 0 auto 10px auto;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props: any): string => props.theme.colors.yellow};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
