import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderStyle = styled.header`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  background-color: black;
  font-family: sans-serif;

  height: ${({ smallScreen }) => (smallScreen ? "40px" : "80px")};
  flex-flow: row wrap;
  box-shadow: 0 0 10px 0 black;

  position: relative;

  transition: height 0.5s;

  * {
    display: inline;
  }
`

const StyledLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% 5%;
  padding-left: 8px;
  padding-right: 8px;
  a {
    text-decoration: none;
    color: ${({ isSelected }) => (isSelected ? "#61dafb" : "white")};
  }
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`

const StyledHomeLink = styled.li`
  display: flex;
  position: relative;
  flex-direction: row;
  left: 5%;
  flex-wrap: none;
  a {
    text-decoration: none;
    color: white;
  }
  font-weight: normal;
`
const LinkGroup = styled.div`
  display: flex;
  /* justify-content: center; */
  flex: 10;
  height: 100%;
  /* scrollbar-width: none; */
  overflow-x: auto;
  overflow-y: hidden;
  flex-direction: row;
  /* justify-content: center; */

  align-items: stretch;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  white-space: nowrap;
  margin-left: 10px;

  scrollbar-color: light;
  scrollbar-width: thin;
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  ::-webkit-scrollbar {
    width: none;
  }

  /* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  } */

  /* ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  } */
`
const HomeLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 2;

  min-width: 108px;

  margin-left: 5%;
  margin-right: 102x;
`
const Header = ({ smallScreen, currentPage, height }) => (
  <HeaderStyle smallScreen={smallScreen} height={height}>
    <HomeLinkContainer>
      <StyledHomeLink>
        <Link to="/">Ofek's Portfolio</Link>
      </StyledHomeLink>
    </HomeLinkContainer>
    <LinkGroup>
      <StyledLink isSelected={currentPage === "home"}>
        <Link to="/">Home</Link>
      </StyledLink>
      <StyledLink isSelected={currentPage === "projects"}>
        <Link to="/projects">Projects</Link>
      </StyledLink>
      <StyledLink isSelected={currentPage === "certifications"}>
        <Link to="/certifications">Certifications</Link>
      </StyledLink>
      <StyledLink isSelected={currentPage === "certifications"}>
        <Link to="/about">About</Link>
      </StyledLink>
    </LinkGroup>
  </HeaderStyle>
)

export default Header
export { StyledLink }
