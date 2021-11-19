import styled from "styled-components";

export const OuterLayout = styled.section`
  width: 100%;
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 1rem 1rem;
  overflow: hidden;

  /* @media screen and (min-width: 1800px) {
    max-width: 1400px;
    margin: 0 auto;
  } */
`;
export const InnerLayout = styled.section`
  padding: 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.max}) {
    padding: 2rem 1rem;
  }
`;
