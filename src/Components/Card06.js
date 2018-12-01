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
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: white;
`;

const Content = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 900;
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: 1.25;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const CTA = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px 0px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;

const CTAText = styled.span`
  color: ${props => props.color};
  font-weight: 500;
`;

const Divider = styled.div`
  background-color: ${props => props.bgColor};
  width: 50%;
  height: 4px;
  border-radius: 2px;
`;

const Card06 = ({
  bgPhoto,
  title,
  cta,
  ctaBg = "#006EFE",
  ctaColor = "white",
  iconName,
  iconSize = 2,
  iconColor = "white",
  dividerColor = "white"
}) => (
  <Container bg={bgPhoto}>
    <Content>
      {iconName && (
        <i
          style={{ color: iconColor }}
          className={`${iconName} fa-${iconSize}x`}
        />
      )}
      {title && <Title>{title}</Title>}
      {title && <Divider bgColor={dividerColor} />}
    </Content>
    {cta && (
      <CTA bgColor={ctaBg} color={ctaColor}>
        <CTAText>{cta}</CTAText>
      </CTA>
    )}
  </Container>
);

Card06.propTypes = {
  bgPhoto: PropTypes.string,
  title: PropTypes.string,
  cta: PropTypes.string,
  ctaBg: PropTypes.string,
  ctaColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  dividerColor: PropTypes.string
};

export default Card06;
