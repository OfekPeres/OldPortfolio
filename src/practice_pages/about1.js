import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Body from "../components/body"
// import SideBar from "../components/sidebar"
import styled from "styled-components"
import ReactPlayer from "react-player"

// const robotTestVid = require("../videos/test.mov")

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
`

const SideBarContainer = styled(Columns)`
  ::-webkit-scrollbar {
    display: none;
  }
  /* display: flex;
  justify-content: flex-start;
  align-content: center;
  height: 100vh;
  overflow: auto;
  margin-top: 80px;
  margin-bottom: -80px; */
  width: 80px;
  background-color: #f7f7f7;
`
const MainContentContainer = styled(Columns)`
  display: flex;
  flex: 15;
  align-items: center;
  /* justify-content: space-around; */
  flex-direction: column;
`
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-left: 7%;
  padding-right: 7%;
`
const VideoContainer = styled.div`
  width: 60%;
`
const VideoAspectRatioContainer = styled.div`
  /* display: flex; */
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  /* padding-top: 25px; */
  height: 0;
  width: 100%;
`

const VideoItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 60%; */
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
      <Header currentPage="about" />
      <Container>
        <SideBarContainer>
          Left Content (sidebar) asdsa asdsa das dasd
          {/* <div style={{ height: "50em" }}></div> */}
        </SideBarContainer>
        <MainContentContainer>
          <VideoContainer>
            <VideoAspectRatioContainer>
              <VideoItem>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=rsF0tNkCfSI"
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls
                  muted
                />
              </VideoItem>
            </VideoAspectRatioContainer>
          </VideoContainer>
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.
          </MainContent>
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.{" "}
          </MainContent>{" "}
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.{" "}
          </MainContent>{" "}
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.{" "}
          </MainContent>{" "}
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.{" "}
          </MainContent>
          <MainContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tristique nibh ac aliquet. Integer finibus cursus
            pellentesque. Praesent hendrerit mi condimentum faucibus feugiat.
            Morbi feugiat dui mattis, consectetur nisi ac, molestie felis. Donec
            tincidunt pulvinar placerat. Phasellus imperdiet, neque id sagittis
            vulputate, enim ex elementum felis, ut fringilla orci eros id eros.
            Integer auctor euismod felis et varius. Morbi ac blandit nisi. In
            efficitur nec mi nec tempus. Nam viverra cursus erat. Maecenas
            faucibus efficitur orci vitae pellentesque. Integer gravida non quam
            vel suscipit. Donec elementum erat ut placerat venenatis.{" "}
          </MainContent>
        </MainContentContainer>
      </Container>
    </Body>
  )
}

export default About
