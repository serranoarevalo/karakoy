import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: white;
  border-radius: 8px;
`;

const Top = styled.div`
  height: 40%;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.bgPhoto});
  background-color: ${props => props.bgColor};
  background-size: cover;
  background-position: center center;
  border-radius: 8px 8px 0px 0px;
  flex-direction: column;
`;

const Bottom = styled.div`
  padding: 10px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  align-self: center;
  margin-top: 20px;
  color: ${props => props.color};
  cursor: pointer;
`;

const TopIconsContainer = styled.div`
  display: flex;
`;

const TopIconContainer = styled.div`
  color: ${props => props.color};
  cursor: pointer;
  &:first-child {
    margin-right: 10px;
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  display: block;
  color: #1f2126;
`;

const Intro = styled.p`
  line-height: 1.2;
  color: #9ca1ae;
`;

const CTA = styled.div`
  cursor: pointer;
  background-image: ${props =>
    `linear-gradient(45deg, ${props.fromColor}, ${props.toColor})`};
  text-align: center;
  padding: 15px 0px;
  border-radius: 8px;
`;

const CTAText = styled.span`
  color: white;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  padding: 10px;
`;

const Card13 = ({
  topIcons,
  topIconsColor = "white",
  centerIcon,
  centerIconSize = 3,
  centerIconColor = "white",
  title,
  titleColor = "#1F2126",
  intro,
  introColor = "#9CA1AE",
  ctaFromBgColor = "#494AFF",
  ctaToBgColor = "#494AFF",
  cta,
  ctaTextColor = "white",
  bgColor = "#DBE0E6",
  bgPhoto
}) => (
  <Container>
    <Top bgPhoto={bgPhoto} bgColor={bgColor}>
      {topIcons && (
        <TopIconsContainer>
          {topIcons.map(icon => (
            <TopIconContainer key={icon} color={topIconsColor}>
              <i className={`${icon}`} />
            </TopIconContainer>
          ))}
        </TopIconsContainer>
      )}
      {centerIcon && (
        <IconContainer color={centerIconColor}>
          <i className={`${centerIcon} fa-${centerIconSize}x`} />
        </IconContainer>
      )}
    </Top>
    {(title || intro) && (
      <Bottom>
        <ContentContainer>
          {title && <Title color={titleColor}>{title}</Title>}
          {intro && <Intro color={introColor}>{intro}</Intro>}
        </ContentContainer>
        {cta && (
          <CTA
            fromColor={ctaFromBgColor}
            toColor={ctaToBgColor}
            color={ctaTextColor}
          >
            <CTAText>{cta}</CTAText>
          </CTA>
        )}
      </Bottom>
    )}
  </Container>
);

Card13.propTypes = {
  topIcons: PropTypes.arrayOf(PropTypes.string),
  topIconsColor: PropTypes.string,
  centerIcon: PropTypes.string,
  centerIconSize: PropTypes.number,
  centerIconColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  intro: PropTypes.string,
  introColor: PropTypes.string,
  cta: PropTypes.string,
  ctaFromBgColor: PropTypes.string,
  ctaToBgColor: PropTypes.string,
  ctaTextColor: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default Card13;
