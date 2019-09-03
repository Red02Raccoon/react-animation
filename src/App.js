import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import './App.css';

const App = () => {
    const [isToggled, setToggle] = useState(false);

    const propsAnim_1 = useSpring({
        from: {
            opacity: 0,
        },
        opacity: 1,
    });

    const { color, y } = useSpring({
        color: isToggled ? 'red' : '#000',
        // fontSize: isToggled ? '30px' : '20px',
        y: isToggled ? 0 : -70,
    });

    console.log({y})

    return (
      <animated.div className="App" style={propsAnim_1}>
        <header className="App-header">
          <div className="logo">LOGO</div>
          <button className="menu-button">Menu</button>
        </header>
        <main>
            <animated.h1 style={{
                transform: y.interpolate(y => `translate3d(0, ${y}px, 0`),
                color
            }}
            >
                Some text
            </animated.h1>
            <button onClick={() => setToggle(!isToggled)}>Toggle state</button>
        </main>
      </animated.div>
    );
}

export default App;
