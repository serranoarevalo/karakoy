import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Card01 from "./Card01";
import Card02 from "./Card02";
import Card03 from "./Card03";
import Card04 from "./Card04";
import Card05 from "./Card05";
import Card06 from "./Card06";
import Card07 from "./Card07";
import Card08 from "./Card08";

const Container = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(10, 150px);
  grid-gap: 30px;
  grid-auto-rows: 260px;
  grid-template-rows: 260px 400px;
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
      bgPhoto="https://picsum.photos/740/420/?random"
    />
    <Card02
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="Spain"
      centerIconName="fas fa-play-circle"
      bottomIconName="fas fa-ellipsis-h"
      bgPhoto="https://picsum.photos/740/420/?random"
    />
    <Card03
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="Spain"
      centerIconName="fas fa-play-circle"
      bottomIconName="fas fa-ellipsis-h"
      bgPhoto="https://picsum.photos/740/420/?random"
      totalReviews={30}
      ratingAverage={4.5}
    />
    <Card04
      title="Upload a new trip"
      subtitle="Drag a file to attach or browse"
      iconName="fas fa-file-upload"
    />
    <Card05
      bgPhoto="https://picsum.photos/740/420/?random"
      tag="Italy"
      title="Burano Island"
      subtitle="November 2017"
      cta="View Trip"
    />
    <Card06
      bgPhoto="https://picsum.photos/740/420/?random"
      title="Places"
      cta="Know more"
      iconName="fas fa-map-pin"
    />
    <Card07
      bg="https://picsum.photos/740/420/?random"
      tag="Italy"
      title="Venice Islands"
      intro="Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated across a group of 118 small islands that are separated by canals and linked by bridges, of which there are 400. The islands are located in the shallow Venetian Lagoon, an enclosed bay that lies between the mouths of the as a UNESCO World Heritage Site."
      cta="View more"
    />
    <Card08
      preTitle="November 2017"
      tag="Italy"
      cta="View trip"
      title="Florence, Italy"
    />

    <GlobalStyle />
  </Container>
);
