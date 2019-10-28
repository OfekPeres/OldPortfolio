import React, { useState, useEffect } from "react"
// custom hook for getting window dimensions
import useWindowDimensions from "../functions/useWindowDimensions"

import Body from "../components/body"
//  header component that should be the same per every page
import Header from "../components/header"
// a style sheet that applies global styles from style.css
import GlobalLayout from "../components/global_layout"
// scroll links and highlight links in navbar when near them
import { Events, scrollSpy } from "react-scroll"
// custom button to open and close navbar on mobile phones
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
  StyledUrlLink,
} from "../components/containers"
// link to other gatsby pages
import { Link } from "gatsby"
// import styled components
import styled from "styled-components"

// styled gatsby Link for inline linking to other pages
const StyledLink = styled(Link)`
  :hover {
    cursor: pointer;
    border-bottom: 1px solid darkseagreen;
  }

  text-decoration: none;
  color: darkseagreen;
`

const initialState = {
  prevScrollpos: 0,
  currentSelection: "",
  toggleSideBar: false,
}

const HomePage = () => {
  const [state, setState] = useState(initialState)
  const { width } = useWindowDimensions()
  // make sure that we know if the screen is big enough to display sidebar
  const smallScreen = width < 560

  // this effect is to handle scrolling to different links
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

  // when going from a toggle sidebar in a small screen to a big screen, the sidebar merges to the left, but when you drag back
  // to a small screen, the sidebar was still there, this effect resets the sidebar after resize
  useEffect(() => {
    if (!smallScreen && toggleSideBar) {
      setState({ ...state, toggleSideBar: false })
    }
  }, [smallScreen])

  // have an onClick method to pass to button to toggle sidebar
  function toggleSideBar() {
    setState({ ...state, toggleSideBar: !state.toggleSideBar })
  }
  // handleClick method for clicking on links in sidebar
  function handleClick(currentSelection) {
    setState({ ...state, currentSelection, toggleSideBar: false })
  }
  return (
    <GlobalLayout>
      <Header smallScreen={smallScreen} currentPage={"home"} />
      <Body>
        <Container smallScreen={smallScreen}>
          <SideBarContainer
            visible={!smallScreen}
            smallScreen={smallScreen}
            toggleSideBar={state.toggleSideBar}
          >
            <SideBarElement
              first={true}
              smallScreen={smallScreen}
              to="welcome"
              currentSelection="welcome"
              handleClick={handleClick}
              text="Welcome to my website!"
            />
            <SideBarElement
              smallScreen={smallScreen}
              to="motivation"
              currentSelection="motivation"
              handleClick={handleClick}
              text="Motivation"
            />
            <SideBarElement
              smallScreen={smallScreen}
              to="about"
              currentSelection="about"
              handleClick={handleClick}
              text="About Me"
            />
            <SideBarElement
              smallScreen={smallScreen}
              to="favorite-books"
              currentSelection="favorite-books"
              handleClick={handleClick}
              text="Favorite Books"
            />
          </SideBarContainer>
          <MainContentContainer id="main-content">
            <HamburgerButton
              showSideBar={state.toggleSideBar}
              toggleSideBar={toggleSideBar}
              smallScreen={smallScreen}
            />

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
            <MainContentElement id="favorite-books">
              <Title isActive={"favorite-books" === state.currentSelection}>
                Favorite Books
              </Title>
              <Blurb>
                Outside of school, I am an avid reader. Science Fiction and
                Fantasy books lend a fascnitating lens to many of the current
                engineering problems we are facing today. Some of my favorites
                include:
                <ul
                  style={{
                    listStyle: "none",
                    width: "100%",
                  }}
                >
                  <li>
                    <StyledUrlLink
                      target="_blank"
                      href="https://www.amazon.com/Name-Wind-Patrick-Rothfuss/dp/0756404746/ref=pd_sbs_14_1/130-9667251-7768948?_encoding=UTF8&pd_rd_i=0756404746&pd_rd_r=0156cf03-6d14-4c9d-b992-ef864409a952&pd_rd_w=r92y7&pd_rd_wg=tpVB6&pf_rd_p=d66372fe-68a6-48a3-90ec-41d7f64212be&pf_rd_r=WJPRH6311Y6V3YSS5QMD&psc=1&refRID=WJPRH6311Y6V3YSS5QMD"
                    >
                      The Name of the Wind, by Patrick Rothfus
                    </StyledUrlLink>
                  </li>

                  <li>
                    <StyledUrlLink
                      target="_blank"
                      href="https://wanderinginn.com/"
                    >
                      The Wandering Inn, by pirateaba
                    </StyledUrlLink>
                  </li>
                  <li>
                    <StyledUrlLink
                      target="_blank"
                      href="https://www.amazon.com/Lies-Locke-Lamora-Gentleman-Bastards/dp/055358894X/ref=pd_sbs_14_1/130-9667251-7768948?_encoding=UTF8&pd_rd_i=055358894X&pd_rd_r=e98faceb-98d1-42fc-bc52-555e99a0ee0c&pd_rd_w=CI9wv&pd_rd_wg=nPsyM&pf_rd_p=d66372fe-68a6-48a3-90ec-41d7f64212be&pf_rd_r=NEP1A6T6D9V9DR44J9MA&psc=1&refRID=NEP1A6T6D9V9DR44J9MA"
                    >
                      The Lies of Locke Lamora, by Scott Lynch
                    </StyledUrlLink>
                  </li>
                  <li>
                    <StyledUrlLink
                      target="_blank"
                      href="https://www.amazon.com/Way-Kings-Brandon-Sanderson/dp/0765365278"
                    >
                      The Way of Kings, by Brandon Sanderson
                    </StyledUrlLink>
                  </li>
                </ul>
              </Blurb>
            </MainContentElement>
            <MainContentElement>
              <div style={{ paddingBottom: "100px" }}></div>
            </MainContentElement>
          </MainContentContainer>
        </Container>
      </Body>
    </GlobalLayout>
  )
}

export default HomePage
