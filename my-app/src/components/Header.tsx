import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <AppHeader>
        <HeaderLogo to="/">My App</HeaderLogo>

        <HeaderNav>
          <HeaderNavItem to="/" label="Home" />
          <HeaderNavItem to="/about" label="About" />
        </HeaderNav>
      </AppHeader>
    );
  }
}

const HeaderLink = styled(Link)<{
  $active: boolean;
}>`
  color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--main-color)')} !important;
  transition: all 0.4s ease;
  &:hover {
    color: var(--primary) !important;
  }
`;

interface HeaderNavItemProps {
  to: string;
  label: string;
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ to, label }) => {
  const { pathname } = useLocation();

  return (
    <HeaderLink to={to} $active={to === pathname}>
      {label}
    </HeaderLink>
  );
};

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const HeaderLogo = styled(Link)`
  color: var(--main-color);
  font-size: 24px;
  font-weight: 700;
  transition: all 0.4s ease;
  &:hover {
    color: var(--primary);
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 30px;
`;

export default Header;
