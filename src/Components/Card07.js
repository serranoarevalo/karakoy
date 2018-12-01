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
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.08);
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
  color: white;
  margin-bottom: 10px;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const TagText = styled.span``;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #1f2126;
  margin-bottom: 20px;
  display: block;
  width: 100%;
`;

const Intro = styled.p`
  height: 80%;
  overflow: hidden;
  line-height: 1.5;
  color: #9ca1ae;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  bottom: 45px;
  position: relative;
`;

const CTA = styled.span`
  cursor: pointer;
  padding: 13px 30px;
  border-radius: 25px;
  z-index: 9;
  background: ${props => props.bgColor};
`;

const CTAText = styled.span`
  color: white;
  font-weight: 500;
`;

const Gradient = styled.div`
  position: relative;
  bottom: 111%;
  width: 100%;
  height: 90%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

const Card07 = ({
  bg,
  tag,
  title,
  intro,
  cta,
  tagBg = "#E33C36",
  ctaBg = "linear-gradient(to left, #006EFE, #494AFF)"
}) => (
  <Container>
    {tag && (
      <TagContainer bgColor={tagBg}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    <Header bg={bg} />
    <Content>
      <Title>{title}</Title>
      <Intro>{intro}</Intro>
      <CTAContainer>
        <CTA bgColor={ctaBg}>
          <CTAText>{cta}</CTAText>
        </CTA>
      </CTAContainer>
      <Gradient />
    </Content>
  </Container>
);

Card07.propTypes = {
  bg: PropTypes.string.isRequired,
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaBg: PropTypes.string,
  tagBg: PropTypes.string
};

export default Card07;
