import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.8) 80%
    ),
    url(${props => props.bg});
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
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

const TagText = styled.span``;

const IconContainer = styled.div`
  color: white;
`;

const ReviewsContainer = styled.div`
  margin-top: 15px;
  font-size: 10px;
  color: rgba(255, 255, 255, 50);
  & span:last-child {
    margin-left: 5px;
  }
`;

const StarContainer = styled.span`
  color: #f4d931;
`;

const FullStar = () => (
  <StarContainer>
    <i className="fas fa-star" />
  </StarContainer>
);

const HalfStar = () => (
  <StarContainer>
    <i className="fas fa-star-half" />
  </StarContainer>
);

const Card03 = ({
  title,
  subtitle,
  tag = null,
  tagBg = "#E33C36",
  bottomIconName = null,
  bottomIconSize = 1,
  bg,
  totalReviews,
  ratingAverage
}) => (
  <Container bg={bg}>
    {tag && (
      <TagContainer tagColor={tagBg}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    <Content>
      <ContentColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <ReviewsContainer>
          {ratingAverage === 0.5 && <HalfStar />}
          {ratingAverage === 1 && <FullStar />}
          {ratingAverage === 1.5 && (
            <>
              <FullStar />
              <HalfStar />
            </>
          )}
          {ratingAverage === 2 && (
            <>
              <FullStar />
              <FullStar />
            </>
          )}
          {ratingAverage === 2.5 && (
            <>
              <FullStar />
              <FullStar />
              <HalfStar />
            </>
          )}
          {ratingAverage === 3 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
            </>
          )}
          {ratingAverage === 3.5 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
            </>
          )}
          {ratingAverage === 4 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
            </>
          )}
          {ratingAverage === 4.5 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
            </>
          )}
          {ratingAverage === 5 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
            </>
          )}
          <span>
            {`${totalReviews === 1 ? "1 review" : `${totalReviews} reviews`}`}
          </span>
        </ReviewsContainer>
      </ContentColumn>
      {bottomIconName && (
        <IconContainer>
          <i className={`${bottomIconName} fa-${bottomIconSize}x`} />
        </IconContainer>
      )}
    </Content>
  </Container>
);

Card03.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  bottomIconName: PropTypes.string,
  bottomIconSize: PropTypes.number,
  bg: PropTypes.string.isRequired,
  totalReviews: PropTypes.number.isRequired,
  ratingAverage: PropTypes.oneOf([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5])
};

export default Card03;
