import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  padding: 50px 100px;
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 50px 25px;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.max}) {
    justify-content: center;
  }

  img {
    margin-right: 0.5rem;
  }
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
