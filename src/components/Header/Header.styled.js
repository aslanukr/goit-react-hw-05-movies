import { Link, NavLink } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(rgb(38, 34, 90) 0%, rgb(78, 1, 83) 100%);

  box-shadow: 5px 5px 5px rgba(78, 1, 83, 0.6);

  @media screen and (min-width: 480px) {
    gap: 100px;
    justify-content: start;
  }
`;

export const MovieIcon = styled(TbMovie)`
  width: 30px;
  height: 30px;
  color: #ffffff;

  @media screen and (min-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 15px;

  @media screen and (min-width: 480px) {
    font-size: 25px;
  }
`;

export const LogoSpan = styled.span`
  font-weight: 700;
  color: #bd7c15;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 15px;

  @media screen and (min-width: 480px) {
    font-size: 25px;
  }
`;

export const NavBtn = styled(NavLink)`
  padding: 20px 0;
  font-weight: 400;
  color: #fffff;

  transition: color 250ms ease-in;

  &:hover,
  &:focus {
    font-weight: 600;
    color: #bd7c15;
  }

  &.active {
    font-weight: 600;
    color: #bd7c15;
  }
`;
