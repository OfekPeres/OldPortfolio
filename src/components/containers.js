import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"
// General Container to hold all content
const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
  margin-top: -80px;
  padding-top: 80px;
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
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  flex-direction: column;
  display: flex;
  min-height: 300px;
`
// Container to hold content for the sidebar
const SideBarContainer = styled(ContainerFoundation)`
  ::-webkit-scrollbar {
    display: none;
  }
  flex: 2;
  display: flex;
min-height: 300px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  display: ${({ toggleSideBar, visible }) =>
    toggleSideBar || visible ? "flex" : "none"};


  /* height: ${({ visible }) => (visible ? "auto" : "0")};
  width: ${({ visible }) => (visible ? "auto" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: ${({ visible }) =>
    visible
      ? "height 1s, width 1s,  opacity 1s"
      : "height 1s, width 1s, opacity 1s"}; */
  /* transition: display 0s ease 2s; */
  min-width: 250px;
  /* background-color: #f7f7f7; */
  background-color:#373a47;
  justify-content: flex-start;
`
const SideBarElement = styled.div`
  display: flex;

  justify-content: center;

  padding: 0.8em;
  color: white;
  :hover {
    color: #61dafb;
  }

  :text {
    cursor: pointer;
  }
`
const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
`
// Container to hold all actual text and videos for a given page
const MainContentContainer = styled(ContainerFoundation)`
  display: flex;
  flex: 15;
  align-items: center;
  /* justify-content: space-around; */
  /* flex-direction: column; */
  font-size: 1.1em;
  /* background-color: #b4bad2; */
  /* color: #fffce1; */
  font-family: "Raleway", Arial, sans-serif;
`

// Place an item to be displayed in this container
const MainContentElement = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-bottom: 3%;
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
}
