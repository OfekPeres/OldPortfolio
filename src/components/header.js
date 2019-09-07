import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import some images/logos for header
import SVG from "react-inlinesvg"
import NewtLogo from "../images/newt_image_logo.png"
import CertificateLogo from "../images/certificate-outline-filled.svg"
const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-family: sans-serif;
  z-index: 10;

  height: ${({ smallScreen }) => (smallScreen ? "40px" : "80px")};
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px 0 black;
  top: "0px";
  position: "absolute";

  transition: height 1s;

  * {
    display: inline;
  }
`

const StyledLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% 5%;
  a {
    text-decoration: none;
    color: ${({ isSelected }) => (isSelected ? "#61dafb" : "white")};
  }
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`

const StyledHomeLink = styled.li`
  display: flex;
  position: relative;

  left: 5%;

  a {
    text-decoration: none;
    color: white;
  }
  font-weight: normal;
`
const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  flex: 9;
`
const HomeLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
  flex-wrap: nowrap;
  min-width: 108px;

  margin-left: 5%;

  /* margin-left: 5%; */
`
const Header = ({ smallScreen, currentPage }) => (
  <HeaderStyle smallScreen={smallScreen}>
    <HomeLinkContainer>
      <StyledHomeLink>
        <Link to="/">Ofek's Portfolio</Link>
      </StyledHomeLink>
    </HomeLinkContainer>
    <LinkGroup>
      <StyledLink isSelected={currentPage === "home"}>
        <Link to="/">Home</Link>
      </StyledLink>
      <StyledLink isSelected={currentPage === "about"}>
        <Link to="/about">About</Link>
      </StyledLink>
      <StyledLink>
        <Link to="/about">
          <SVG src={CertificateLogo} width="30px" alt="">
            <title>Certifications</title>
          </SVG>
        </Link>
      </StyledLink>
    </LinkGroup>
  </HeaderStyle>
)

export default Header
export { StyledLink }
