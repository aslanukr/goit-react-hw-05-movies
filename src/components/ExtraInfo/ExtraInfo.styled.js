import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ExtraButtonsWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExtraButtons = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ExtraLink = styled(NavLink)`
  padding: 5px 15px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  background-color: rgb(78, 1, 83);

  transition: color 250ms ease-in;

  &.active {
    color: #bd7c15;
  }

  &:hover,
  &:focus {
    color: #bd7c15;
  }
`;
