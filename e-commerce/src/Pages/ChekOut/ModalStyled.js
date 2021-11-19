import styled from "styled-components";

export const ModalStyled = styled.div`
  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    padding: 40px;
    z-index: -1;
    &.show {
      visibility: visible;
      z-index: 10;
    }
  }
`;
export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  height: 70vh;
  max-width: 900px;
  place-items: center;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    /* flex-direction: row; */
    width: 40vw;
    height: 60vh;
    overflow: auto;
  }

  .heading {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  img {
    width: 25%;
    max-width: 200px;
  }
  .order {
    /* width: 100%; */
    height: 40vh;
    overflow-y: auto;
    margin-top: 1rem;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      height: unset;
    }
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
    .total {
      margin-top: 1rem;
    }
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.3rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
`;
