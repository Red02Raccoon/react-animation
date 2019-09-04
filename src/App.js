import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import Nav from "./Nav";
import Logo from "./Logo";
import Text from "./Text";
import "./App.css";

const AnimatedNav = animated(Nav);

const App = () => {
  const [isToggled, setToggle] = useState(false);
  const [isOpenNav, toggleStateNav] = useState(false);

  const propsAnim_1 = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const { color, y } = useSpring({
    color: isToggled ? "red" : "#000",
    // fontSize: isToggled ? '30px' : '20px',
    y: isToggled ? 0 : -70
  });

  const navAnimation = useSpring({
    transform: isOpenNav ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)"
  });

  const handleClick = () => {
    toggleStateNav(isOpenNav => !isOpenNav);
  };

  console.log({ navAnimation });

  return (
    <animated.div className="App" style={propsAnim_1}>
      <header className="App-header">
        <Logo>Logo test</Logo>
        <button className="menu-button" onClick={handleClick}>
          Menu
        </button>

        <AnimatedNav style={navAnimation} />
      </header>
      <main>
        <animated.h1
          style={{
            transform: y.interpolate(y => `translate3d(0, ${y}px, 0`),
            color
          }}
        >
          Some text
        </animated.h1>
        <button onClick={() => setToggle(!isToggled)}>Toggle state</button>
      </main>
      <Text>some text for animation</Text>
    </animated.div>
  );
};

export default App;
