import styled from "styled-components";

export const GalleryStyled = styled.div`
  position: relative;
  padding: 50px 100px;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
  }
  @media screen and (min-height: 1100px) and (max-height: 1366px) {
    height: 30vh;
  }
  @media screen and (min-height: 1000px) and (max-height: 1024px) {
    height: 50vh;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.adapt}) {
    height: 50vh;
  }
  @media (min-width: ${({ theme }) => theme.team}) {
    height: 50vh;
  }
  /* .circle {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    clip-path: circle(450px at left 900px);
    @media (max-width: ${({ theme }) => theme.dont}) {
      clip-path: circle(600px at left 1000px);
    }
    @media screen and (min-height: 400px) and (max-height: 600px) {
      clip-path: circle(600px at left 1000px);
    }
  } */
  .gallery-text {
    width: 50%;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      @media (max-width: ${({ theme }) => theme.make}) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.5rem;
      @media (max-width: ${({ theme }) => theme.mind}) {
        font-size: 1rem;
      }
    }
  }
`;
