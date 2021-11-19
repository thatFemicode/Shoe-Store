import styled from "styled-components";

export const PgStyled = styled.div`
  img {
    width: 380px;
    margin-left: 15rem;

    @media (max-width: ${({ theme }) => theme.mins}) {
      margin-left: 9rem;
      width: 300px;
    }
    @media (max-width: ${({ theme }) => theme.mind}) {
      width: 250px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      margin-left: 4rem;
    }
  }
`;
