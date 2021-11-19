import styled from "styled-components";

export const MainStyled = styled.main`
  @media (min-width: ${({ theme }) => theme.team}) {
    max-width: 1500px;
    margin: 0 auto;
  }
  /* background-color: var(--theme-bg-color);
  height: 100%;
  width: 100%; */
  /* background: white; */
  /* min-height: 80vh; */
  /* width: 60%; */
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  ); */
  /* border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem); */
  /* color: var(--theme-color); */
  /* backdrop-filter: blur(0px); */
`;
