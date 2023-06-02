import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const CastItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Thumb = styled.div`
  display: block;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const ActorName = styled.span`
  font-weight: 700;
`;

export const Character = styled.span`
  font-style: italic;
  color: #bd7c15;
`;
