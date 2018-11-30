import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  background-position: center center;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  margin-top: 40px;
`;

const ContentColumn = styled.div``;

const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  font-size: 14px;
`;

const TagContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: ${props => props.tagColor};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  color: white;
`;

const TagText = styled.div``;

const IconContainer = styled.div`
  color: white;
`;

const CenterIcon = styled.div`
  color: white;
`;

const Card02 = ({
  title,
  subtitle,
  tag = null,
  tagBg = "#E33C36",
  bottomIconName = null,
  bottomIconSize = 1,
  centerIconName = null,
  centerIconSize = 3,
  bg
}) => (
  <Container bg={bg}>
    <TagContainer tagColor={tagBg}>
      <TagText>{tag}</TagText>
    </TagContainer>
    {centerIconName && (
      <CenterIcon>
        <i className={`${centerIconName} fa-${centerIconSize}x`} />
      </CenterIcon>
    )}
    <Content>
      <ContentColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentColumn>
      {bottomIconName && (
        <IconContainer>
          <i className={`${bottomIconName} fa-${bottomIconSize}x`} />
        </IconContainer>
      )}
    </Content>
  </Container>
);

Card02.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  bottomIconName: PropTypes.string,
  bottomIconSize: PropTypes.number,
  centerIconName: PropTypes.string,
  centerIconSize: PropTypes.number,
  bg: PropTypes.string.isRequired
};

export default Card02;
