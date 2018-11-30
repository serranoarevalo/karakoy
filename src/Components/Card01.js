import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: url(${props => props.bg});
  background-size: cover;
  border-radius: 8px 8px 10px 10px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: flex-end;
`;

const Content = styled.div`
  border-radius: 0px 0px 8px 8px;
  background-color: white;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentColumn = styled.div``;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #1f2126;
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  font-size: 14px;
  color: #61656e;
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

const TagText = styled.span``;

const IconContainer = styled.div`
  color: rgba(67, 72, 77, 0.2);
`;

const Card01 = ({
  title,
  subtitle,
  tag = null,
  tagColor = "#368BE3",
  iconName = null,
  iconSize = 2,
  bg
}) => (
  <Container bg={bg}>
    <TagContainer tagColor={tagColor}>
      <TagText>{tag}</TagText>
    </TagContainer>
    <Content>
      <ContentColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentColumn>
      {iconName && (
        <IconContainer>
          <i className={`${iconName} fa-${iconSize}x`} />
        </IconContainer>
      )}
    </Content>
  </Container>
);

Card01.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  bg: PropTypes.string
};

export default Card01;
