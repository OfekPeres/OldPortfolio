import React from "react"
import styled from "styled-components"
const awesomeLogo = require("../images/awesome-logo.svg")
const socialIcon = require("../images/social-icons.svg")
const imageOne = require("../images/one.svg")
const imageTwo = require("../images/two.svg")
const imageThree = require("../images/three.svg")
const imageFour = require("../images/four.svg")
const imageFive = require("../images/five.svg")

const Body = styled.body``

const FlexContainer = styled.div`
  color: #fff;
  background-color: #5995da;
  padding: 20px 0;
  justify-content: center;
  display: flex;
  font-family: sans-serif;
`

const MenuDiv = styled.div`
  flex-direction: row;
  border: 1px solid #fff;
  width: 900px;
  display: flex;
  justify-content: space-between;
`
const LinksDiv = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: flex-end;
`
const DateDiv = styled.div``

const SignUpDiv = styled.div``

const LoginDiv = styled.div`
  margin-left: 20px;
`
const LogoDiv = styled.div``

const SocialDiv = styled.div``

const SubscribeDiv = styled.div`
  /* border: 1px solid #5995da; */
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #5995da;
  background-color: #d6e9fe;
`
const Header = styled.div`
  width: 900px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PhotoGridContainer = styled.div`
  display: flex;
  justify-content: center;
`
const PhotoGrid = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
`
const PhotoGridItem = styled.div`
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
`

const Page = () => (
  <>
    <Body>
      <FlexContainer>
        <MenuDiv>
          <DateDiv>Aug 14, 2016</DateDiv>
          <LinksDiv>
            <SignUpDiv> Sign Up</SignUpDiv>

            <LoginDiv>Login</LoginDiv>
          </LinksDiv>
        </MenuDiv>
      </FlexContainer>
    </Body>

    <HeaderContainer>
      <Header>
        <SubscribeDiv>Subscribe!</SubscribeDiv>
        <LogoDiv>
          <img alt="" src={awesomeLogo} />
        </LogoDiv>
        <SocialDiv>
          <img alt="" src={socialIcon} />
        </SocialDiv>
      </Header>
    </HeaderContainer>

    <PhotoGridContainer>
      <PhotoGrid>
        <PhotoGridItem>
          <img alt="" src={imageOne} />
        </PhotoGridItem>
        <PhotoGridItem>
          <img alt="" src={imageTwo} />
        </PhotoGridItem>
        <PhotoGridItem>
          <img alt="" src={imageThree} />
        </PhotoGridItem>
        <PhotoGridItem>
          <img alt="" src={imageFour} />
        </PhotoGridItem>
        <PhotoGridItem>
          <img alt="" src={imageFive} />
        </PhotoGridItem>
      </PhotoGrid>
    </PhotoGridContainer>
    {/* <body>
      <div class="menu-container">
        <div class="menu">
          <div class="date">Aug 14, 2016</div>
          <div class="signup">Sign Up</div>
          <div class="login">Login</div>
        </div>
      </div>
    </body> */}
  </>
)

export default Page
