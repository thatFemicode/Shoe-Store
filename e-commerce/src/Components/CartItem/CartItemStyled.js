import styled from "styled-components";

export const CartItemStyled = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.make}) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    flex-direction: column;
  }
  .cart-image {
    flex: 1;

    img {
      width: 60%;
    }
  }
  .cart-actions {
    /* align-self: flex-start; */
    flex: 1;
    p {
      margin-bottom: 1rem;
      @media (max-width: ${({ theme }) => theme.mins}) {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }
    }
    .cartItem-name {
      font-size: 1.5rem;
      @media (max-width: ${({ theme }) => theme.mins}) {
        font-size: 1.4em;
      }
    }

    .action {
      display: flex;
      justify-content: space-between;
      width: 20%;

      @media (max-width: ${({ theme }) => theme.mins}) {
        width: 30%;
      }
      align-items: center;
      margin-top: 2rem;
      @media (max-width: ${({ theme }) => theme.mins}) {
        margin-top: 1rem;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 40%;
      }
      button {
        background: transparent;
        border: none;
      }
      .cartItem-select {
        padding: 6px 11px;
        @media (max-width: ${({ theme }) => theme.mins}) {
          padding: 4px 7px;
          /* background-color: red; */
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
