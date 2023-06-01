import styled from 'styled-components';

export const MovieWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Thumb = styled.div`
  display: block;
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Poster = styled.img`
  object-fit: cover;
`;
