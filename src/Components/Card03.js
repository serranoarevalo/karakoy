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
  align-items: flex-end;
  justify-content: center;
`;

const Content = styled.div`
  bottom: 10px;
  width: 100%;
  padding: 20px;
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
  tagColor = "#E33C36",
  bottomIconName = null,
  bottomIconSize = "1",
  bg,
  totalReviews,
  ratingAverage
}) => (
  <Container bg={bg}>
    <TagContainer tagColor={tagColor}>
      <TagText>{tag}</TagText>
    </TagContainer>
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
  tagColor: PropTypes.string,
  bottomIconName: PropTypes.string,
  bottomIconSize: PropTypes.string,
  bg: PropTypes.string,
  totalReviews: PropTypes.number.isRequired,
  ratingAverage: PropTypes.oneOf([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5])
};

export default Card03;
