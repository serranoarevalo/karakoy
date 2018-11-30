import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Card01 from "./Card01";
import Card02 from "./Card02";
import Card03 from "./Card03";

const Container = styled.div`
  padding: 90px;
  & > div {
    margin-bottom: 100px;
  }
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
    <Card02
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="Spain"
      centerIconName="fas fa-play-circle"
      bottomIconName="fas fa-ellipsis-h"
      bg="https://picsum.photos/740/420/?random"
    />
    <Card03
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="Spain"
      centerIconName="fas fa-play-circle"
      bottomIconName="fas fa-ellipsis-h"
      bg="https://picsum.photos/740/420/?random"
      totalReviews={30}
      ratingAverage={4.5}
    />
    <GlobalStyle />
  </Container>
);
