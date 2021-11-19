import styled from "styled-components";

export const SliderStyled = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: -2rem;
  @media (max-width: ${({ theme }) => theme.make}) {
    height: 100vh;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) {
    height: unset;
  }
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideNum * -100}vw);

  /* .circle {
    width: 292px;
    height: 292px;
    opacity: 0.31;
    position: absolute;
    z-index: 0;
    background: red;
    border-radius: 50%;

    &-one {
      background: linear-gradient(
        90deg,
        rgba(93, 2, 2, 0.0001) 0%,
        rgba(93, 2, 2, 0.497569) 100%
      );
      top: -146px;
      right: 292px;
    }
  } */
`;
export const Slide = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  @media (max-width: ${({ theme }) => theme.make}) {
    flex-direction: column;
  }
  @media (min-width: ${({ theme }) => theme.team}) {
    height: 60vh;
  }
`;
export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 3rem;
  /* z-index: 4; */
  @media (max-width: ${({ theme }) => theme.se}) {
    bottom: 2rem;
  }
`;
export const ImgContainer = styled.div`
  /* height: 100%; */
  flex: 1;
  width: 300px;

  @media (min-width: ${({ theme }) => theme.team}) {
    width: 70%;
    flex: unset;
  }
`;

export const Image = styled.img`
  @media (min-width: ${({ theme }) => theme.team}) {
    width: 600px;
    flex: unset;
    margin-top: 8rem;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 100px;
  align-self: flex-start;
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 60px;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 60px;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    padding: 30px;
  }
  @media (min-width: ${({ theme }) => theme.team}) {
    width: 30%;
    flex: unset;
    align-self: center;
  }
`;

export const Title = styled.h1`
  font-size: 9rem;
  /* line-height: 1.6; */
  @media (max-width: ${({ theme }) => theme.shoe}) {
    font-size: 4rem;
  }
  @media (min-width: ${({ theme }) => theme.team}) {
    font-size: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 3rem;
  } ;
`;

export const Desc = styled.p`
  margin: 1rem 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media (min-width: ${({ theme }) => theme.team}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 1rem;
  } ;
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.team}) {
    font-size: 1.5rem;
  }
`;
