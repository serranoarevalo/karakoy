import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: ${props =>
    `linear-gradient(45deg, ${props.fromColor}, ${props.toColor})`};
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
`;

const PreTitle = styled.span`
  color: ${props => props.color};
  font-size: 9px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Title = styled.span`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: 900;
`;

const Divider = styled.div`
  margin-top: 5px;
  background-color: ${props => props.bgColor};
  width: 15%;
  height: 4px;
  border-radius: 2px;
`;

const Card11 = ({
  title,
  preTitle,
  titleColor = "white",
  preTitleColor = "white",
  dividerColor = "white",
  fromColor = "#FF770E",
  toColor = "#DB7805"
}) => (
  <Container fromColor={fromColor} toColor={toColor}>
    {preTitle && <PreTitle color={preTitleColor}>{preTitle}</PreTitle>}
    {title && <Title color={titleColor}>{title}</Title>}
    <Divider bgColor={dividerColor} />
  </Container>
);

Card11.propTypes = {
  title: PropTypes.string,
  preTitle: PropTypes.string,
  titleColor: PropTypes.string,
  preTitleColor: PropTypes.string,
  dividerColor: PropTypes.string,
  fromColor: PropTypes.string,
  toColor: PropTypes.string
};

export default Card11;
