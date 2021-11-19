import React from "react";
import {
  NewsStyled,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./NewsLetterStyled";

const NewsLetter = () => {
  return (
    <NewsStyled>
      <Title>Updates</Title>
      <Desc>Input email to get updates on our products</Desc>
      <InputContainer>
        <Input placeholder="Your email" disabled="true" />
        <Button>Email</Button>
      </InputContainer>
    </NewsStyled>
  );
};

export default NewsLetter;
