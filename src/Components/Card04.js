import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-image: white;
  border-radius: 8px 8px 10px 10px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-position: center center;
`;

const Content = styled.div`
  border: 2px dashed #dbe0e6;
  border-spacing: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ContentColumn = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
  color: ${props => props.color};
`;

const Subtitle = styled.span`
  font-size: 14px;
  color: ${props => props.color};
`;

const IconContainer = styled.div`
  color: ${props => props.color};
  margin-bottom: 20px;
`;

const Card04 = ({
  title,
  titleColor = "#43484D",
  subtitle,
  subtitleColor = "#a2abb3",
  iconName,
  iconSize = 3,
  iconColor = "#43484d"
}) => (
  <Container>
    <Content>
      <ContentColumn>
        {iconName && (
          <IconContainer color={iconColor}>
            <i className={`${iconName} fa-${iconSize}x`} />
          </IconContainer>
        )}
        {(title || subtitle) && (
          <>
            {title && <Title color={titleColor}>{title}</Title>}
            {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
          </>
        )}
      </ContentColumn>
    </Content>
  </Container>
);

Card04.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string
};

export default Card04;
