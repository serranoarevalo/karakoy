import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.7)),
    url(${props => props.bgPhoto});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  background-position: center center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 5px solid ${props => props.borderBottomColor};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ContentColumn = styled.div``;

const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  color: ${props => props.color};
`;

const Subtitle = styled.span`
  margin-top: 8px;
  font-size: 14px;
  display: block;
  color: ${props => props.color};
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: ${props => props.color};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`;

const Tag = styled.span`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Card14 = ({
  title,
  subtitle,
  titleColor = "white",
  subtitleColor = "white",
  borderBottomColor = "#E33C36",
  iconName,
  iconSize = 2,
  iconColor = "white",
  bgPhoto,
  tag,
  tagColor = "white",
  tagBg = "#E33C36"
}) => (
  <Container bgPhoto={bgPhoto} borderBottomColor={borderBottomColor}>
    <Top>
      {iconName && (
        <IconContainer color={iconColor}>
          <i className={`${iconName} fa-${iconSize}x`} />
        </IconContainer>
      )}
    </Top>

    {(title || subtitle) && (
      <Content>
        <ContentColumn>
          <TitleContainer>
            {title && <Title color={titleColor}>{title}</Title>}
            {tag && (
              <Tag color={tagColor} bgColor={tagBg}>
                {tag}
              </Tag>
            )}
          </TitleContainer>
          {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
        </ContentColumn>
      </Content>
    )}
  </Container>
);

Card14.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  bgPhoto: PropTypes.string,
  borderBottomColor: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  tagBg: PropTypes.string
};

export default Card14;
