import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled.div`
  height: 40%;
  border-radius: 8px 8px 0px 0px;
  background-image: url(${props => props.bgPhoto});
  background-color: ${props => props.bgColor};
  background-size: cover;
  background-position: center center;
`;

const Content = styled.div`
  height: 60%;
  padding: 20px;
  background-color: white;
  overflow: hidden;
  border-radius: 0px 0px 8px 8px;
  position: relative;
`;

const TagContainer = styled.div`
  background-color: ${props => props.bgColor};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.color};
  margin-bottom: 10px;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const TagText = styled.span``;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.color};
  margin-bottom: 20px;
  display: block;
  width: 100%;
`;

const Intro = styled.p`
  height: 80%;
  overflow: hidden;
  line-height: 1.5;
  color: ${props => props.color};
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  bottom: 45px;
  position: relative;
`;

const CTA = styled.span`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 25px;
  z-index: 9;
  background: ${props => props.bgColor};
  color: ${props => props.color};
`;

const CTAText = styled.span`
  font-weight: 500;
`;

const Gradient = styled.div`
  position: relative;
  bottom: 115%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

const Card07 = ({
  bgPhoto,
  bgColor = "#DBE0E6",
  tag,
  tagBg = "#E33C36",
  tagColor = "white",
  title,
  titleColor = "#1f2126",
  intro,
  introColor = "#9ca1ae",
  cta,
  ctaBg = "linear-gradient(to left, #006EFE, #494AFF)",
  ctaColor = "white"
}) => (
  <Container>
    {tag && (
      <TagContainer bgColor={tagBg} color={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    <Header bgPhoto={bgPhoto} bgColor={bgColor} />
    <Content>
      {title && <Title color={titleColor}>{title}</Title>}
      {intro && <Intro color={introColor}>{intro}</Intro>}
      {cta && (
        <CTAContainer>
          <CTA bgColor={ctaBg} color={ctaColor}>
            <CTAText>{cta}</CTAText>
          </CTA>
        </CTAContainer>
      )}
      {intro && <Gradient />}
    </Content>
  </Container>
);

Card07.propTypes = {
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  tagColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  intro: PropTypes.string,
  introColor: PropTypes.string,
  cta: PropTypes.string,
  ctaBg: PropTypes.string,
  ctaColor: PropTypes.string
};

export default Card07;
