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
  color: white;
  font-weight: 500;
`;

const Divider = styled.div`
  background-color: white;
  width: 50%;
  height: 4px;
  border-radius: 2px;
`;

const Card06 = ({
  bg,
  title,
  cta,
  ctaBg = "#006EFE",
  iconName,
  iconSize = 2
}) => (
  <Container bg={bg}>
    <Content>
      <i className={`${iconName} fa-${iconSize}x`} />
      <Title>{title}</Title>
      <Divider />
    </Content>
    <CTA bgColor={ctaBg}>
      <CTAText>{cta}</CTAText>
    </CTA>
  </Container>
);

Card06.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaBg: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number
};

export default Card06;
