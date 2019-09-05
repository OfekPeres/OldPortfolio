import styled from "styled-components"
import React from "react"
const StyledHamburgerButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  /* display: flex; */
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "none")};
  position: absolute;
  right: 30px;
  bottom: 30px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
`
const StyledHamburgerButton = styled.button`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1.5px solid black;

  box-shadow: 0 0 3px gray;

  :hover,
  :active {
    background: burlywood;
  }
`
const HamburgerLines = styled.span`
  /* position: relative; */

  left: 0px;
  right: 0px;
  top: ${({ top }) => top};
  opacity: 1;
  display: flex;
  border: 1.5px solid black;
  background: black;
  width: 30px;
  margin-bottom: 5px;
  margin-top: 5px;
`
const HamburgerElement = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 2em;
  font-weight: bold;
`
const HamburgerButton = ({ smallScreen, toggleSideBar, showSideBar }) => {
  return (
    <StyledHamburgerButtonContainer smallScreen={smallScreen}>
      <StyledHamburgerButton
        onClick={() => {
          toggleSideBar()
        }}
      >
        {!showSideBar ? (
          <HamburgerElement>
            <HamburgerLines top="0%"></HamburgerLines>
            <HamburgerLines top="40%"></HamburgerLines>
            <HamburgerLines top="80%"></HamburgerLines>
          </HamburgerElement>
        ) : (
          <HamburgerElement>X</HamburgerElement>
        )}
      </StyledHamburgerButton>
    </StyledHamburgerButtonContainer>
  )
}
export {
  StyledHamburgerButton,
  StyledHamburgerButtonContainer,
  HamburgerLines,
  HamburgerElement,
  HamburgerButton,
}
