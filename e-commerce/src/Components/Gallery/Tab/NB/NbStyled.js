import styled from "styled-components";

export const NbStyled = styled.div`
  img {
    width: 500px;
    margin-left: 13rem;
    @media (max-width: ${({ theme }) => theme.mins}) {
      margin-left: 6rem;
      width: 400px;
    }
    @media (max-width: ${({ theme }) => theme.mind}) {
      width: 300px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      margin-left: 3rem;
    }
  }
`;
