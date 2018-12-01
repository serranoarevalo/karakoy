import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Card08 = ({
  preTitle,
  overlayColor = "rgba(0, 31, 154, 0.5)",
  cta,
  ctaColor,
  tag,
  tagColor = "",
  title
}) => <Container />;

Card08.propTypes = {
  preTitle: PropTypes.string,
  overlayColor: PropTypes.string,
  ctaColor: PropTypes.string,
  tagColor: PropTypes.string,
  tag: PropTypes.string,
  cta: PropTypes.string,
  title: PropTypes.string
};

export default Card08;
