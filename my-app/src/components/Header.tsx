import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  activeStyle = {
    color: 'var(--primary)',
  };

  render() {
    return (
      <AppHeader>
        <NavLink
          to="/"
          style={{ color: 'var(--primary)', fontSize: '26px', fontWeight: 700, opacity: 0.6 }}
        >
          RACOON digest
        </NavLink>

        <HeaderNav>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? this.activeStyle : undefined)}
            data-testid="mainpage-link"
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? this.activeStyle : undefined)}
            data-testid="aboutpage-link"
          >
            About
          </NavLink>
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

export default Header;
