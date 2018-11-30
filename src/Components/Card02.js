import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 340px;
  height: 260px;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg});
  background-size: cover;
  border-radius: 8px 8px 10px 10px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  margin-top: 20px;
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
  tagColor = "#E33C36",
  bottomIconName = null,
  bottomIconSize = "1",
  centerIconName = null,
  centerIconSize = "3",
  bg
}) => (
  <Container bg={bg}>
    <TagContainer tagColor={tagColor}>
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
  tagColor: PropTypes.string,
  bottomIconName: PropTypes.string,
  bottomIconSize: PropTypes.string,
  centerIconName: PropTypes.string,
  centerIconSize: PropTypes.string,
  bg: PropTypes.string
};

export default Card02;
