import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingContainer = styled.div`
  display: block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 0px) and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const TrendingTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (min-width: 480px) {
    font-size: 40px;
  }
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const TrendingItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  border-radius: 5px;
  scale: 1;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  transition: scale 250ms ease-in, box-shadow 250ms ease-in;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 3px 3px 3px rgba(78, 1, 83, 0.8);
  }

  // @media screen and (min-width: 0px) and (max-width: 479px) {
  //   width: calc((100% - 10px * (1)) / (1));
  // }
  @media screen and (min-width: 768px) {
    width: calc((100% - 10px * (4 - 1)) / (4));
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 10px * (6 - 1)) / (6));
  }
`;

export const TrendingMovie = styled(Link)`
  text-align: center;
`;

export const Thumb = styled.div`
  display: block;
  border-radius: 10px;
  overflow: hidden;
`;
