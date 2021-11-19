import styled from "styled-components";

export const CartStyled = styled.section`
  /* background-color: rgba(245, 245, 245, 1); */
  height: 100vh;
  overflow-y: auto;
  position: relative;
  width: 100%;
  .main {
    padding: 20px 100px;
    background-color: #fff;
    height: 70vh;
    overflow-y: auto;
    border-radius: 8px;
    @media screen and (min-height: 1100px) and (max-height: 1366px) {
      height: 40vh;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      padding: 20px 50px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      padding: 20px 20px;
    }
    h2 {
      @media (max-width: ${({ theme }) => theme.make}) {
        font-size: 1rem;
      }
    }
    .cart-body {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      justify-content: space-between;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex-direction: column;
      }
      &-left {
        flex: 0.3;
        align-self: flex-start;
        margin-top: 2rem;

        button {
          padding: 10px 17px;
          width: 100%;
          background: #171717;
          color: #f4f4f4;
          border: 1px solid #171717;
          cursor: pointer;
          border-radius: 8px;
          @media (min-width: ${({ theme }) => theme.dont}) {
            width: 50%;
          }
        }
        &-info {
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          height: 20vh;
          overflow-y: auto;
          width: 60%;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          @media (max-width: ${({ theme }) => theme.desktop}) {
            width: 100%;
          }
          p {
            padding: 8px;
          }
          .img {
            width: 50px;
            /* display: inline; */
          }
          /* height: 20vh;
          border: 1px solid teal;
      
          */
        }
      }
      &-right {
        flex: 0.7;

        @media (max-width: ${({ theme }) => theme.desktop}) {
          margin-top: 2rem;
        }
      }
    }
  }
`;
