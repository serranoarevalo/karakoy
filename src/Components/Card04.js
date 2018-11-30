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
`;

const Subtitle = styled.span`
  font-size: 14px;
  color: #a2abb3;
`;

const IconContainer = styled.div`
  color: #43484d;
  margin-bottom: 20px;
`;

const Card04 = ({ title, subtitle, centerIconName, centerIconSize = 3 }) => (
  <Container>
    <Content>
      <ContentColumn>
        {centerIconName && (
          <IconContainer>
            <i className={`${centerIconName} fa-${centerIconSize}x`} />
          </IconContainer>
        )}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentColumn>
    </Content>
  </Container>
);

Card04.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  centerIconName: PropTypes.string,
  centerIconSize: PropTypes.number
};

export default Card04;
