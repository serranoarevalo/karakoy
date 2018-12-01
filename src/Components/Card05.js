import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background: linear-gradient(rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${props => props.bg});
  background-position: center center;
  background-size: cover;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tag = styled.div`
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
`;

const TagName = styled.span``;

const Title = styled.span`
  font-weight: 900;
  color: white;
  font-size: 23px;
  text-align: center;
  line-height: 1.25;
  margin-bottom: 5px;
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
`;

const CTA = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 10px 0px;
  text-align: center;
  cursor: pointer;
`;

const CTAText = styled.span`
  color: white;
  font-weight: 500;
`;

const Card05 = ({
  bg,
  tag,
  title,
  subtitle,
  cta,
  tagBg = "#E33C36",
  ctaBg = "#006EFE"
}) => (
  <Container bg={bg}>
    <Content>
      <Tag bgColor={tagBg}>
        <TagName>{tag}</TagName>
      </Tag>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Content>
    <CTA bgColor={ctaBg}>
      <CTAText>{cta}</CTAText>
    </CTA>
  </Container>
);

Card05.propTypes = {
  bg: PropTypes.string,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  tagBg: PropTypes.string,
  ctaBg: PropTypes.string
};

export default Card05;
