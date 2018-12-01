import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background: linear-gradient(rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${props => props.bgPhoto});
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
  color: ${props => props.color};
  margin-bottom: 10px;
`;

const TagName = styled.span``;

const Title = styled.span`
  font-weight: 900;
  color: ${props => props.color};
  font-size: 23px;
  text-align: center;
  line-height: 1.25;
  margin-bottom: 5px;
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: 13px;
  color: ${props => props.color};
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
  color: ${props => props.color};
`;

const CTAText = styled.span`
  font-weight: 500;
`;

const Card05 = ({
  bgPhoto,
  tag,
  tagColor = "white",
  tagBg = "#E33C36",
  title,
  titleColor = "white",
  subtitle,
  subtitleColor = "rgba(255, 255, 255, 0.8)",
  cta,
  ctaColor = "white",
  ctaBg = "#006EFE"
}) => (
  <Container bgPhoto={bgPhoto}>
    <Content>
      {tag && (
        <Tag bgColor={tagBg} color={tagColor}>
          <TagName>{tag}</TagName>
        </Tag>
      )}
      {(title || subtitle) && (
        <>
          {title && <Title color={titleColor}>{title}</Title>}
          {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
        </>
      )}
    </Content>
    {cta && (
      <CTA bgColor={ctaBg} color={ctaColor}>
        <CTAText>{cta}</CTAText>
      </CTA>
    )}
  </Container>
);

Card05.propTypes = {
  bgPhoto: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  tagBg: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  cta: PropTypes.string,
  ctaColor: PropTypes.string,
  ctaBg: PropTypes.string
};

export default Card05;
