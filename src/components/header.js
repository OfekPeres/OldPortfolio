import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #e4decd; */
  background-color:black;
  /* font-size: 3rem; */
  font-family: sans-serif;
  z-index: 10;
  position: relative;
  height: 80px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px 0 black;
  /* top: ${({ navBarVisible }) => (navBarVisible ? "0px" : "-80px")}; */
  /* opacity: ${({ navBarVisible }) => (navBarVisible ? 1 : 0)}; */
  /* transition: top 0.6s; */
  /* transition: opacity 0.5s; */
  * {
    display: inline;
  }
`

const StyledLink = styled.li`
  margin: 0% 5%;
  a {
    text-decoration: none;
    color: ${({ isSelected }) => (isSelected ? "#61dafb" : "white")};
  }
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`
const Header = ({ navBarVisible, currentPage }) => (
  <HeaderStyle navBarVisible={navBarVisible}>
    <StyledLink isSelected={currentPage === "home"}>
      <Link to="/">Home</Link>
    </StyledLink>
    <StyledLink isSelected={currentPage === "about"}>
      <Link to="/about">About</Link>
    </StyledLink>
  </HeaderStyle>
)

export default Header
