import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 1.15fr 0.9fr;
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
`;

const MovieNavbar = (props) => {

  return (
    <NavWrapper>
      <h1>{props.movie.info.name} ({props.movie.info.releaseYear})</h1>
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