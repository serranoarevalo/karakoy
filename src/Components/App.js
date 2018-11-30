import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Card01 from "./Card01";

const Container = styled.div`
  padding: 90px;
`;

export default () => (
  <Container>
    <Card01
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="Spain"
      iconName="far fa-heart"
      bg="https://picsum.photos/740/420/?random"
    />
    <GlobalStyle />
  </Container>
);
