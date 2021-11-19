import styled from "styled-components";

export const NewsStyled = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    height: 30vh;
  }
  @media screen and (min-height: 1100px) and (max-height: 1366px) {
    height: 30vh;
  }
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.make}) {
    font-size: 2rem;
  }
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.make}) {
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 80%;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 5;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
`;
