import React from 'react';
import styled from 'styled-components';

const Nav = styled.ul`
  // float: left;
  list-style: none;
`;

const NavItem = styled.li`
  float: left;
`;

const MovieNavbar = (props) => {

  return (
    <div>
      <h1>{props.movie.info.name} ({props.movie.info.releaseYear})</h1>
      <Nav>
        <NavItem>Overview</NavItem>
        <NavItem>Movie Times + Tickets</NavItem>
        <NavItem>Synopsis</NavItem>
        <NavItem>Movie Reviews</NavItem>
        <NavItem>Trailers</NavItem>
        <NavItem>More</NavItem>
      </Nav>
    </div>
  );
};

export default MovieNavbar;