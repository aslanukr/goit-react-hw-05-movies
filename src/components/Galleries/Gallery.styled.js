import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (min-width: 480px) {
    font-size: 40px;
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  border-radius: 5px;
  scale: 1;

  transition: scale 250ms ease-in;

  &:hover,
  &:focus {
    scale: 1.05;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 10px * (4 - 1)) / (4));
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 10px * (6 - 1)) / (6));
  }
`;

export const MovieLink = styled(Link)`
  text-align: center;
`;

export const MovieInfoWrapper = styled.div`
  padding: 20px 0;
`;

export const Thumb = styled.div`
  display: block;
  border-radius: 10px;
  overflow: hidden;
`;

export const Poster = styled.img`
  object-fit: cover;
`;
