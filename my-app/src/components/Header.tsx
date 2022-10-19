import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <AppHeader>
        <NavLink to="/" className={'logo'}>
          RACOON digest
        </NavLink>

        <HeaderNav>
          <HeaderNavLink to="/" data-testid="mainpage-link" end>
            Home
          </HeaderNavLink>
          <HeaderNavLink to="/about" data-testid="aboutpage-link">
            About
          </HeaderNavLink>
          <HeaderNavLink to="/contacts" data-testid="contactspage-link">
            Contacts
          </HeaderNavLink>
        </HeaderNav>
      </AppHeader>
    );
  }
}

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 30px;
`;

const HeaderNavLink = styled(NavLink)`
  transition: 0.3s all;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }
`;

export default Header;
