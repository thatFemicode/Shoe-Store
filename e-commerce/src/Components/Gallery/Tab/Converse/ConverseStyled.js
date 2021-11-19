import styled from "styled-components";

export const ConverseStyled = styled.div`
  img {
    width: 500px;
    margin-left: 11rem;
    @media (max-width: ${({ theme }) => theme.mind}) {
      margin-left: unset;
    }
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 450px;
      margin-left: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.mind}) {
      width: 350px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      margin-left: 0;
    }
  }
`;
