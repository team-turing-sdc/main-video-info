import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  float: left;
  background-color: rgba(51,51,51,.95);
  margin: 0;
  text-transform: uppercase;
  border-bottom: 3px solid #f15500;
  box-shadow: 0 3px 3px rgba(50, 50, 50, .3);
  width: 100%;
  height: 8vh;
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
  vertical-align: top;
  margin-left: 1vw;
`;
const Logo = styled.img`
  height: 4.75vh;
  width: 3.5vw;
  margin-top: 1vh;
`;

const ListItem = styled.li`
  float: left;
  margin-right: 3.5vw;
  font-size: 1.1em;
  font-family: ProximaNovaW01-Bold, Helvetica;
  :hover {
    color: white;
    transition: all .2s ease-in-out;
  }
`;

const AppNavbar = (props) => {

  return (
    <NavWrapper>
      <nav>
        <NavList>
          <ListItem>
            <Logo src="https://s3.us-east-2.amazonaws.com/fec-hrr37-brian/fandango.png" alt="Logo"/>
            <AppTitle href="#">Fandangit</AppTitle>
          </ListItem>
          <ListItem>Search Bar Here</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movie Times + Tickets</ListItem>
          <ListItem>Movie News</ListItem>
          <ListItem>Join Fandangit VIP</ListItem>
        </NavList>
      </nav>
    </NavWrapper>
  );
};

export default AppNavbar;