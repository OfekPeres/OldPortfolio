import React from "react"
import styled from "styled-components"

const StyledSideBar = styled.div`
  background-color: #09868b;
  position: fixed;
  top: 0;
  margin-top: 80px;
  margin-left: 0;
  width: 80px;
  /* min-height: 100%; */
  /* max-height:100%; */
  height:100%
  align-items: center;
  box-shadow: 1px 0 5px 1px black;
  /* opacity: ${({ navBarVisible }) => (navBarVisible ? "1" : "0")}; */

  transition: opacity 0.3s ease-in-out;

  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  overflow: scroll;
`
const StyledListElement = styled.li`
  margin: 0% 5%;
  a {
    color: black;
    text-decoration: none;
  }
  list-style: none;
  display: flex;
`
const SideBar = ({ navBarVisible }) => (
  <StyledSideBar navBarVisible={navBarVisible}>
    <StyledListElement>item 1</StyledListElement>
    <StyledListElement>item 2</StyledListElement>
    <StyledListElement>item 3</StyledListElement>
  </StyledSideBar>
)

export default SideBar
