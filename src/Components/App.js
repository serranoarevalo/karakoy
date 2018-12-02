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
import Card09 from "./Card09";
import Card10 from "./Card10";
import Card11 from "./Card11";
import Card12 from "./Card12";
import Card13 from "./Card13";
import Card14 from "./Card14";
import Card15 from "./Card15";
import Card16 from "./Card16";

const Container = styled.div`
  padding: 50px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
  grid-auto-rows: 400px;
  grid-template-rows: 260px 400px 400px;
  & > div {
    grid-column: span 2;
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: span 1;
    }
    &:nth-child(8) {
      grid-column: span 4;
    }
    &:nth-child(14) {
      grid-column: span 4;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
    padding: 10px;
    & > div {
      grid-column: span 1 !important;
    }
  }
`;

const MultiCard = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 115px 255px;
  & > div:last-child {
    grid-column: span 2;
  }
`;

const TwoCards = styled(MultiCard)`
  grid-template-columns: 1fr;
  grid-column-gap: 0;
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
      bgPhoto="https://picsum.photos/740/420/?random"
      tag="Italy"
      title="Venice Islands"
      intro="Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated across a group of 118 small islands that are separated by canals and linked by bridges, of which there are 400. The islands are located in the shallow Venetian Lagoon, an enclosed bay that lies between the mouths of the as a UNESCO World Heritage Site."
      cta="View more"
    />
    <Card08
      bgPhoto="https://picsum.photos/740/420/?random"
      preTitle="November 2017"
      tag="Italy"
      cta="View more"
      title="Florence, Italy"
    />
    <MultiCard>
      <Card09 title="Pictures" iconName="fas fa-image" />
      <Card09
        title="Places"
        iconName="fas fa-map-pin"
        fromColor="#870EFF"
        toColor="#4C09BE"
      />
      <Card10
        title="Toledo, Spain"
        subtitle="Also know as The Imperial City."
        tag="Spain"
        iconName="fas fa-ellipsis-v"
        bgPhoto="https://picsum.photos/740/420/?random"
      />
    </MultiCard>
    <TwoCards>
      <Card11 title="Euro Trip" preTitle="November 2017" />
      <Card12
        title="Toledo, Spain"
        subtitle="Also know as The Imperial City."
        tag="Spain"
        iconName="fas fa-ellipsis-v"
        bgPhoto="https://picsum.photos/740/420/?random"
        cta="View Trip"
      />
    </TwoCards>
    <Card13
      title="Monuments in Florence"
      intro="A quick journey into Florence's most important monuments."
      cta="View trip detail"
      centerIcon="fas fa-play-circle"
      topIcons={["far fa-heart", "fas fa-share"]}
      bgPhoto="https://picsum.photos/740/420/?random"
    />
    <Card14
      title="Toledo, Spain"
      subtitle="Also know as The Imperial City."
      tag="16"
      iconName="fas fa-heart"
      bgPhoto="https://picsum.photos/740/420/?random"
      cta="View Trip"
    />
    <Card15
      title="The Blue House"
      subtitle="Burano, Venice, Italy"
      iconName="fas fa-heart"
      btnIcon="fas fa-arrow-right"
      bgPhoto="https://picsum.photos/740/420/?random"
      secondTitle="$250 per night"
      totalReviews={30}
      ratingAverage={4.5}
    />
    <Card16
      title="The Blue House"
      text="Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated across a group of 118 small islands that are separated by canals and linked by bridges, of which there are 400. The islands are located in the shallow Venetian Lagoon, an enclosed bay that lies between the mouths of the Po and the Piave rivers."
      bgPhoto="https://picsum.photos/740/420/?random"
      preTitle="November 2017"
    />
    <GlobalStyle />
  </Container>
);
