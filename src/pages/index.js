import React, { useState, useEffect } from "react"
import Body from "../components/body"
import Header from "../components/header"

// make a fucntion to hold state for when I am scrolling or not, then add a useEffect
// hook to update the visible/invisible state of the header
const initialState = {
  prevScrollpos: window.pageYOffset,
  navBarVisible: true,
}

const HomePage = () => {
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
  return (
    <>
      <Header navBarVisible={state.navBarVisible} currentPage={"home"} />
      <Body>
        <h1>Welcome to My Website!</h1>
      </Body>
    </>
  )
}

export default HomePage
