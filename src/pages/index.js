import React, { useState, useEffect } from "react"
import useWindowDimensions from "../functions/useWindowDimensions"
import Body from "../components/body"
import Header from "../components/header"
import {
  Events,
  // animateScroll as scroll,
  scrollSpy,
} from "react-scroll"
import { HamburgerButton } from "../components/buttons"
import {
  Container,
  SideBarContainer,
  MainContentContainer,
  MainContentElement,
  PageHeader,
  Title,
  Blurb,
  SideBarElement,
  StyledScrollLink,
} from "../components/containers"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  :hover {
    cursor: pointer;
  }

  text-decoration: none;
  color: black;
`
// make a function to hold state for when I am scrolling or not, then add a useEffect
// hook to update the visible/invisible state of the header
const initialState = {
  prevScrollpos: window.pageYOffset,
  navBarVisible: true,
  currentSelection: "",
  toggleSideBar: true,
}

// const titleToID = {"Welcome To My Website" : }
const HomePage = () => {
  const [state, setState] = useState(initialState)
  const { width } = useWindowDimensions()
  // make sure that we know if the screen is big enough to display sidebar
  const smallScreen = width < 560

  useEffect(() => {
    const handleScroll = () => {
      const { prevScrollpos } = state

      const currentScrollPos = window.pageYOffset
      const navBarVisible = prevScrollpos > currentScrollPos

      setState({ ...state, prevScrollpos: currentScrollPos, navBarVisible })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  // const scrollToTop = () => scroll.scrollToTop()
  // const scrollToBottom = () => scroll.scrollToBottom()

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      // console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function(to, element) {
      // console.log("end", arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  })

  // have an onClick method to pass to button to toggle sidebar

  function toggleSideBar() {
    setState({ ...state, toggleSideBar: !state.toggleSideBar })
  }
  return (
    <>
      <Header navBarVisible={state.navBarVisible} currentPage={"home"} />
      <Body>
        <Container>
          <SideBarContainer
            visible={!smallScreen}
            toggleSideBar={state.toggleSideBar}
          >
            <SideBarElement>
              <StyledScrollLink
                activeClass="element-active-on-screen"
                to="welcome"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="main-content"
                onClick={() => {
                  const currentSelection = "welcome"
                  setState({ ...state, currentSelection })
                }}
              >
                Welcome to my website!
              </StyledScrollLink>
            </SideBarElement>
            <SideBarElement>
              <StyledScrollLink
                activeClass="element-active-on-screen"
                to="motivation"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="main-content"
                onClick={() => {
                  const currentSelection = "motivation"
                  setState({ ...state, currentSelection })
                }}
              >
                to Motivation
              </StyledScrollLink>
            </SideBarElement>
            <SideBarElement>
              <StyledScrollLink
                activeClass="element-active-on-screen"
                to="about2"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="main-content"
                onClick={() => {
                  const currentSelection = "about2"
                  setState({ ...state, currentSelection })
                }}
              >
                to about 2
              </StyledScrollLink>
            </SideBarElement>
            <SideBarElement>
              <StyledScrollLink
                activeClass="element-active-on-screen"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="main-content"
                onClick={() => {
                  let currentSelection = "about"
                  setState({ ...state, currentSelection })
                }}
              >
                About Me
              </StyledScrollLink>
            </SideBarElement>
          </SideBarContainer>
          <MainContentContainer id="main-content">
            <HamburgerButton
              showSideBar={state.toggleSideBar}
              toggleSideBar={toggleSideBar}
              smallScreen={smallScreen}
            ></HamburgerButton>

            <MainContentElement id="welcome">
              <PageHeader isActive={"welcome" === state.currentSelection}>
                Welcome to Ofek's Website.
              </PageHeader>
            </MainContentElement>
            <MainContentElement id="motivation">
              <Title isActive={"motivation" === state.currentSelection}>
                Motivation
              </Title>
              <Blurb>
                This project is meant to bring some of my achievements to life,
                to share my skills and experiences in a way that is
                <i> more </i>
                than just data on a page.
              </Blurb>
            </MainContentElement>
            <MainContentElement id="about">
              <Title isActive={"about" === state.currentSelection}>
                About Me
              </Title>
              <Blurb>
                I'm a Senior at Princeton University majoring in Mechanical and
                Aerospace Engineering and minoring in Computer Science and
                Robotics. I love the intersection between hardware and software.
                Feel free to check out some of my
                <StyledLink to="/projects"> favorite projects</StyledLink>!
              </Blurb>
            </MainContentElement>
            {/* Remove after here */}

            <MainContentElement id="motivation2">
              <Title isActive={"motivation2" === state.currentSelection}>
                Motivation 2
              </Title>
              <Blurb>
                This project is meant to bring some of my achievements to life,
                to share my skills and experiences in a way that is
                <i> more </i>
                than just data on a page.
              </Blurb>
            </MainContentElement>
            <MainContentElement id="about2">
              <Title isActive={"about2" === state.currentSelection}>
                About Me 2
              </Title>
              <Blurb>
                I'm a Senior at Princeton University majoring in Mechanical and
                Aerospace Engineering and minoring in Computer Science and
                Robotics. I love the intersection between hardware and software.
                Feel free to check out some of my
                <StyledLink to="/projects"> favorite projects</StyledLink>!
              </Blurb>
            </MainContentElement>
            <section id="section1">Test Section Here</section>

            {/* Remove before here */}
            {/* Arbitrary div with height so scrolling works well */}
            <MainContentElement>
              {/* <div
                style={{ "margin-bottom": "350px", overflow: "hidden" }}
              ></div> */}
            </MainContentElement>
          </MainContentContainer>
        </Container>
      </Body>
    </>
  )
}

export default HomePage
