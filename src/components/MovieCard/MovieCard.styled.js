import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

export const Thumb = styled.div`
  display: block;
  margin-bottom: 10px;
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Poster = styled.img`
  object-fit: cover;
`;

export const InfoLayer = styled.div`
  display: block;
  padding: 15px;
  background: rgba(0, 0, 0, 0.17);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
`;

export const MovieTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #bd7c15;
`;

export const InfoWrapper = styled.div`
  display: block;
`;

export const InfoTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
  color: #bd7c15;
`;

export const Info = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const GoBackBtn = styled(Link)`
  display: flex;
  gap: 5px;
  width: 120px;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  background-color: rgb(78, 1, 83);

  transition: color 250ms ease-in;

  &:hover,
  &:focus {
    color: #bd7c15;
  }
`;
