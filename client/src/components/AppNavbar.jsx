import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  background: rgba(51,51,51,.95);
  margin: 0;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  list-style: none;
  color: white;
`;

const AppTitle = styled.a`
  font-family: ProximaNovaW01-Bold, Helvetica;
  font-size: 2.25em;
  color: #4AA7F6;
  text-decoration: none;
`;
const Logo = styled.img`
  height: 5vh;
  width: 4vw;
`;
const AppNavbar = (props) => {

  return (
    <NavWrapper>
      <nav>
        <NavList>
          <li>
            <Logo src="https://s3.us-east-2.amazonaws.com/fec-hrr37-brian/fandango.png" alt="Logo"/>
            <AppTitle href="#">Fandangit</AppTitle>
          </li>
          <li>Search Bar Here</li>
          <li>Movies</li>
          <li>Movie Times + Tickets</li>
          <li>Movie News</li>
          <li>Join Fandangit VIP</li>
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default AppNavbar;