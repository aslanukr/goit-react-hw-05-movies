import {
  HeaderContainer,
  LogoLink,
  LogoSpan,
  MovieIcon,
  NavBtn,
  NavList,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <MovieIcon />
        Movie<LogoSpan>Base</LogoSpan>
      </LogoLink>
      <nav>
        <NavList>
          <li>
            <NavBtn to="/">Home</NavBtn>
          </li>
          <li>
            <NavBtn to="/movies">Movies</NavBtn>
          </li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};
