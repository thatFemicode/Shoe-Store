import styled from "styled-components";

export const NavStyled = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 3rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1rem 1rem;
    width: 100%;
  }
  /* height: 60px; */

  .left {
    flex: 1;
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;

    .svgs {
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 50%;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.max}) {
      flex: 2;
    }
  }
`;
export const MenuItem = styled.div`
  /* font-size: 14px; */
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.max}) {
    font-size: 1.3rem;
  }

  .cart-number {
    position: absolute;
    top: -0.7rem;
    font-size: 1rem;
  }
`;
