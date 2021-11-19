import styled from "styled-components";

export const ProductStyled = styled.section``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  /* height: 65vh; */
  @media (max-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
  }
`;
export const ImgContainer = styled.div`
  /* flex: 1; */
  /* justify-self: end; */
  /* margin-left: 15rem; */
`;
export const Image = styled.img`
  width: 400px;
  /* height: 35vh; */
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  /* flex: 2; */
  padding: 0px 50px;
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 0 20px;
  }
`;
export const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  margin: 20px 0px;
  width: 350px;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
  }
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 1.3rem;
`;
export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  height: 100%;
`;
export const FilterSizeOption = styled.option``;
export const Button = styled.button`
  padding: 8px;
  border: 1px solid teal;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1rem;
  &:hover {
    background-color: #f8f4f4;
  }
`;
