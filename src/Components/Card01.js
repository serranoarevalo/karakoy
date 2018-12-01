import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: url(${props => props.bgPhoto}), ${props => props.bgColor};
  background-position: center top;
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
  color: ${props => props.color};
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  font-size: 14px;
  color: ${props => props.color};
`;

const TagContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: ${props => props.tagBg};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.tagColor};
`;

const TagText = styled.span``;

const IconContainer = styled.div`
  color: ${props => props.iconColor};
`;

const Card01 = ({
  title,
  titleColor = "#1f2126",
  subtitle,
  subtitleColor = "#61656E",
  tag,
  tagBg = "#368BE3",
  tagColor = "white",
  iconName,
  iconSize = 2,
  bgPhoto,
  bgColor = "#DBE0E6",
  iconColor = "rgba(67, 72, 77, 0.2)"
}) => (
  <Container bgPhoto={bgPhoto} bgColor={bgColor}>
    {tag && (
      <TagContainer tagBg={tagBg} tagColor={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    {(title || subtitle) && (
      <Content>
        <ContentColumn>
          {title && <Title color={titleColor}>{title}</Title>}
          {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
        </ContentColumn>
        {iconName && (
          <IconContainer iconColor={iconColor}>
            <i className={`${iconName} fa-${iconSize}x`} />
          </IconContainer>
        )}
      </Content>
    )}
  </Container>
);

Card01.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  tagColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string
};

export default Card01;
