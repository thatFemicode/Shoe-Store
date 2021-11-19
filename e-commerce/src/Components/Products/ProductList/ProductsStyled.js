import styled from "styled-components";

export const ProductsStyled = styled.div`
  background-color: rgba(245, 245, 245, 1);
  padding: 50px 100px;

  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 20px;
  }
  /* .product-text {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    @media (max-width: ${({ theme }) => theme.se}) {
      padding: unset;
    }
  } */
  h1 {
    font-size: 4rem;
    @media (max-width: ${({ theme }) => theme.make}) {
      font-size: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 2.5rem;
    }
    @media (max-width: ${({ theme }) => theme.se}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    @media (max-width: ${({ theme }) => theme.se}) {
      font-size: 1rem;
    }
  }
  .products-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 2rem;
    gap: 1rem;
    @media (min-width: ${({ theme }) => theme.make}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${({ theme }) => theme.kobe}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
