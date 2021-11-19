import styled from "styled-components";

export const TabStyled = styled.div`
  display: flex;
  position: relative;
  width: 50%; /* flex: 2; */
  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
  }
  .btn-con {
    display: flex;
    align-items: center;
    width: 60%;
    /* margin: 0 auto; */
    justify-content: space-between;
    position: absolute;
    bottom: -6rem;
    right: 20%;
    @media (max-width: ${({ theme }) => theme.mind}) {
      bottom: -5rem;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      bottom: -2rem;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      bottom: -7rem;
    }
    @media (max-width: ${({ theme }) => theme.adapt}) {
      bottom: -2rem;
    }
    /* transform: translateX(0%); */
  }
  .tabs-btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    /* align-self: flex-start; */
    /* text-align: left;
    transition: all 1s ease-in-out; */

    img {
      width: 120px;
    }
  }
  .details-con {
    @media (max-width: ${({ theme }) => theme.desktop}) {
      height: 30vh;
    }
  }
`;
