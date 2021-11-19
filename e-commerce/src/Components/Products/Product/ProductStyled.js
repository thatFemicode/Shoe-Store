import styled from "styled-components";

export const ProductStyled = styled.div`
  /* width: 300px; */
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.make}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    width: 250px;
  }
  img {
    width: 200px;
    align-self: center;
    transition: all 1.5s ease-in-out;
    /* margin-top: 1rem; */
    margin-bottom: 0.5rem;
  }
  .product-info {
    p {
      margin-bottom: 0.7rem;
    }
    .info {
      &-name {
        font-size: 2rem;
        overflow: hidden;
        @media (max-width: ${({ theme }) => theme.mind}) {
          font-size: 1.5rem;
        }
      }
      &-description {
        font-size: 1rem;
      }
      &-price {
        font-size: 0.9rem;
      }
    }
  }
  .info-button {
    color: inherit;
    display: block;
    text-decoration: none;
    text-align: center;
    color: #fff;
    width: 60%;
    padding: 3px 5px;
    background-color: #000;
    border: 1px solid #171717;
    border-radius: 5px;
    font-size: 1rem;
    &:hover {
      background: #171717;
      color: #f4f4f4;
    }
  }
`;
