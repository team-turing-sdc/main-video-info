import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 0.75fr 0.45fr;
  background: rgba(76, 76, 76, 0.5);
  font-family: Alternate Gothic No1 D;
`;

const MovieTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3.5em;
`;
const Nav = styled.ul`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 0;
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  float: left;
  color: white;
  margin-right: 3.5vw;
  font-size: 1.1em;
  font-family: ProximaNovaW01-Bold, Helvetica;
  text-transform: uppercase;
`;

const MovieNavbar = (props) => {

  return (
    <NavWrapper>
      <MovieTitle>{props.movie.info.name} ({props.movie.info.releaseYear})  <i class="far fa-heart"></i></MovieTitle>
      <Nav>
        <NavItem>Overview</NavItem>
        <NavItem>Movie Times + Tickets</NavItem>
        <NavItem>Synopsis</NavItem>
        <NavItem>Movie Reviews</NavItem>
        <NavItem>Trailers</NavItem>
        <NavItem>More</NavItem>
      </Nav>
    </NavWrapper>
  );
};

export default MovieNavbar;