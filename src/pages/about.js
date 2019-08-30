import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Body from "../components/body"
// import SideBar from "../components/sidebar"
import styled from "styled-components"

// All of the below containers should be moved to separate files
// const PageContainer = styled.div`
//   display: flex;
//   overflow: hidden;
//   height: 100vh;
//   margin-top: -80px;
//   padding-top: 80px;
//   position: relative;
//   width: 100%;
//   backface-visibility: hidden;
//   will-change: overflow;
// `

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
`
const Columns = styled.div`
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

const SideBarContainer = styled(Columns)`
  /* display: flex;
  justify-content: flex-start;
  align-content: center;
  height: 100vh;
  overflow: auto;
  margin-top: 80px;
  margin-bottom: -80px; */
  width: 12.5rem;
  background-color: indigo;
`
const MainContent = styled(Columns)`
  flex: 1;
`
// const SideBarPlaceholder = styled.div`
//   background-color: #09868b;
//   display: flex;
//   align-content: space-between;
//   flex-direction: column;
//   width: 80px;
// `
// const SideBarElement = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-size: 72px;
// `
// All of the above containers should be moved to separate files
const initialState = {
  prevScrollpos: window.pageYOffset,
  navBarVisible: true,
}

const About = () => {
  const [state, setState] = useState(initialState)

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
  //   return (
  //     <PageContainer>
  //       <Header
  //         headerText="About Ofek"
  //         currentPage="about"
  //         navBarVisible={state.navBarVisible}
  //       />

  //       <SideBarContainer>
  //         {/* <SideBar navBarVisible={state.navBarVisible} /> */}
  //         <SideBarPlaceholder>
  //           <SideBarElement>1</SideBarElement>
  //           <SideBarElement>2</SideBarElement>
  //           <SideBarElement>3</SideBarElement>
  //         </SideBarPlaceholder>
  //       </SideBarContainer>
  //       <Container>
  //         <Body>
  //           <div style={{ color: `teal` }}>
  //             <h1>About Gatsby</h1>
  //             <p>Such wow. Very React.</p>
  //           </div>
  //         </Body>
  //       </Container>
  //       <div style={{ height: "50em" }}></div>
  //     </PageContainer>
  //   )

  return (
    <Body>
      {/* <Header>Header</Header> */}
      <Header
        headerText="About Ofek"
        currentPage="about"
        navBarVisible={state.navBarVisible}
      />
      <Container>
        <SideBarContainer>
          Left Content (sidebar)
          <div style={{ height: "50em" }}></div>
        </SideBarContainer>
        <MainContent>
          MainContent
          <div style={{ height: "50em" }}></div>
        </MainContent>
      </Container>
    </Body>
  )
}

export default About
