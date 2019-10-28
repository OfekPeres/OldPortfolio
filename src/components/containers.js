import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"
import React from "react"
// General Container to hold all content
const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  /* Adjust for hiding/showing navbar */
  margin-top: ${({ smallScreen }) => (smallScreen ? "-40px" : "-80px")};
  padding-top: ${({ smallScreen }) => (smallScreen ? "40px" : "80px")};

  /* height: calc(100vh); */
  height: 100vh;
  position: relative;
  width: 100%;
  backface-visibility: hidden;
  will-change: overflow;
  color: black;
  font-family: sans-serif;
`

// Reusable style elements for both the sidebar and main content container
const ContainerFoundation = styled.div`
  overflow: auto;
  height: 100vh;
  padding: 0.5rem;
  /* -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; */

  flex-direction: column;
  display: flex;
  /* display: -webkit-flexbox; */
  /* display: -webkit-box; */
`
// Container to hold content for the sidebar
const SideBarContainer = styled(ContainerFoundation)`
  ::-webkit-scrollbar {
    width: thin;
  }
  flex: 2;
  display: flex;


  /* Hide SideBar without using Display:none */
  /* position: absolute;
   top: -9999px;
   left: -9999px; */
   
   
/* Hide SideBar using display:none */
  /* display: ${({ visible }) => (visible ? "flex" : "none")}; */

  
  /* top:${({ visible }) => (visible ? "" : "-3000px")}; */
  /* left:${({ visible }) => (visible ? "0px" : "-300px")}; */
  /* visibility: ${({ visible }) => (visible ? "visible" : "hidden")}; */
  
  
  position: ${({ toggleSideBar }) => (toggleSideBar ? "absolute" : "relative")};
  left:${({ toggleSideBar, visible }) =>
    visible || toggleSideBar ? "0px" : "-600px"};
  width: ${({ toggleSideBar }) => (toggleSideBar ? "100vw" : "")};
  height: ${({ toggleSideBar }) => (toggleSideBar ? "100vh" : "100vh")};
  opacity: ${({ toggleSideBar }) => (toggleSideBar ? ".9" : "")};

  position: ${({ visible }) => (visible ? "relative" : "absolute")};

  transition: left .3s, position 0s 1.1s, opacity 0s , width 0s 1s, height 0s ;
      
  min-width: 250px;
  /* background-color: #f7f7f7; */
  background-color: #373a47;
  
  /* justify-content:${({ smallScreen }) =>
    smallScreen ? "center" : "flex-start"}; */
    display: -webkit-flex;
    
  

  padding-bottom: 40px;


`
const SideBarElementStyle = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;

  padding: 0.8em;
  color: white;
  :hover {
    color: #61dafb;
  }

  :text {
    cursor: pointer;
  }

  margin-top: ${({ first, smallScreen }) =>
    smallScreen && first ? "auto" : "0"};

  display: -webkit-flex;
`
const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
`
// Container to hold all actual text and videos for a given page
const MainContentContainer = styled(ContainerFoundation)`
  display: flex;
  /* display: -webkit-flexbox; */
  flex-direction: column;
  /* -webkit-flex-direction: column; */
  flex: 15;
  align-items: center;
  /* justify-content: space-around; */
  /* flex-direction: column; */
  font-size: 1.1em;
  /* background-color: #b4bad2; */
  /* color: #fffce1; */
  font-family: "Raleway", Arial, sans-serif;
`
const SideBarElement = ({
  first,
  smallScreen,
  to,
  currentSelection,
  handleClick,
  text,
}) => {
  return (
    <SideBarElementStyle first={first} smallScreen={smallScreen}>
      <StyledScrollLink
        activeClass="element-active-on-screen"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-75}
        containerId="main-content"
        onClick={() => {
          handleClick(currentSelection)
        }}
      >
        {text}
      </StyledScrollLink>
    </SideBarElementStyle>
  )
}
// Place an item to be displayed in this container
const MainContentElement = styled.div`
  display: flex;
  flex-shrink: 0;
  /* display: -webkit-flexbox; */
  /* flex: 0 1 auto; */
  /* justify-content: center; */
  align-items: center;
  /* margin-bottom: px; */
  padding-top: 3%;
  padding-left: 7%;
  padding-right: 7%;
  flex-direction: column;
`

// To make a dynamic sizing video player I need 3 things,
// This initial container so that the video is not huge
const VideoContainer = styled.div`
  width: 60%;
`
// This container to maintain the aspect ratio of most videos, especially youtube ones
const VideoAspectRatioContainer = styled.div`
  /* display: flex; */
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  /* padding-top: 25px; */
  height: 0;
  width: 100%;
`
// the actual video with the react-player element goes in this
const VideoItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 60%; */
`
const PageHeader = styled.h1`
  text-align: center;
  animation: ${({ isActive }) =>
    isActive ? "pageheader-background-fade 3s forwards" : "none"};
  animation-direction: alternate;
  animation-delay: 600ms;
  @keyframes pageheader-background-fade {
    0% {
      background-color: none;
    }
    50% {
      background-color: powderblue;
    }
    100% {
      background-color: none;
    }
  }
`
const Title = styled.h2`
  margin-bottom: 2%;

  /* display: inline; */

  animation: ${({ isActive }) =>
    isActive ? "title-background-fade 3s forwards" : "none"};

  animation-direction: alternate;
  animation-delay: 600ms;
  @keyframes title-background-fade {
    0% {
      background-color: none;
    }
    50% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
`

const StyledUrlLink = styled.a`
  :hover {
    /* cursor: pointer; */
    border-bottom: 1px solid darkseagreen;
  }

  text-decoration: none;
  color: darkseagreen;
`
const Blurb = styled.p``
export {
  Container,
  ContainerFoundation,
  SideBarContainer,
  MainContentContainer,
  MainContentElement,
  VideoContainer,
  VideoAspectRatioContainer,
  VideoItem,
  Title,
  Blurb,
  SideBarElement,
  PageHeader,
  StyledScrollLink,
  StyledUrlLink,
}
