import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Card01 from "./Card01";
import Card02 from "./Card02";
import Card03 from "./Card03";
import Card04 from "./Card04";
import Card05 from "./Card05";
import Card06 from "./Card06";

const Container = styled.div`
  padding: 90px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 40px;
  grid-auto-rows: 260px;
  grid-template-rows: 260px;
  & > div {
    grid-column: span 2;
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: span 1;
    }
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
    <Card04
      title="Upload a new trip"
      subtitle="Drag a file to attach or browse"
      centerIconName="fas fa-file-upload"
    />
    <Card05
      bg="https://picsum.photos/740/420/?random"
      tag="Italy"
      title="Burano Island"
      subtitle="November 2017"
      cta="View Trip"
    />
    <Card06
      bg="https://picsum.photos/740/420/?random"
      title="Places"
      cta="Know more"
      iconName="fas fa-map-pin"
    />
    <GlobalStyle />
  </Container>
);
