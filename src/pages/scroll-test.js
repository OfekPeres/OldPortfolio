import React, { useEffect } from "react"
import {
  Link,
  // Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  // scroller,
} from "react-scroll"

// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
const ScrollTest = () => {
  const scrollToTop = () => scroll.scrollToTop()
  const scrollToBottom = () => scroll.scrollToBottom()

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  })
  return (
    <div>
      <div>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Test 1
        </Link>
        <Link
          activeClass="active"
          to="test2"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
        >
          Test 2
        </Link>
      </div>
      <div>
        <h1 style={{ height: "500px" }} id="test1">
          Hi
        </h1>
        <h1 style={{ height: "500px" }} id="test2">
          Hi
        </h1>
        <h1 style={{ height: "500px" }} id="test3">
          Hi
        </h1>
      </div>
    </div>
  )
}

//   render: function() {
//     return (
//       <div>
//         <Link
//           activeClass="active"
//           to="test1"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           onSetActive={this.handleSetActive}
//         >
//           Test 1
//         </Link>
//         <Link
//           activeClass="active"
//           to="test1"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           delay={1000}
//         >
//           Test 2 (delay)
//         </Link>
//         <Link
//           className="test6"
//           to="anchor"
//           spy={true}
//           smooth={true}
//           duration={500}
//         >
//           Test 6 (anchor)
//         </Link>
//         <button
//           activeClass="active"
//           className="btn"
//           type="submit"
//           value="Test 2"
//           to="test2"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//         >
//           Test 2
//         </button>

//         <Element name="test1" className="element">
//           test 1
//         </Element>

//         <Element name="test2" className="element">
//           test 2
//         </Element>

//         <div id="anchor" className="element">
//           test 6 (anchor)
//         </div>

//         <Link to="firstInsideContainer" containerId="containerElement">
//           Go to first element inside container
//         </Link>

//         <Link to="secondInsideContainer" containerId="containerElement">
//           Go to second element inside container
//         </Link>
//         <div className="element" id="containerElement">
//           <Element name="firstInsideContainer">
//             first element inside container
//           </Element>

//           <Element name="secondInsideContainer">
//             second element inside container
//           </Element>
//         </div>

//         <button onClick={this.scrollToTop}>To the top!</button>
//         <br />
//         <button onClick={this.scrollToBottom}>To the bottom!</button>
//         <br />
//         <button onClick={this.scrollTo}>Scroll to 100px from the top</button>
//         <br />
//         <button onClick={this.scrollMore}>
//           Scroll 100px more from the current position!
//         </button>
//       </div>
//     )
//   },
// })

export default ScrollTest
