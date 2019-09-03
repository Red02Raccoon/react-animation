import React from 'react';
import { useSpring, animated } from 'react-spring'

import './App.css';

const App = () => {
    const props = useSpring({
        from: {
            opacity: 0,
        },
        opacity: 1,
    })
    return (
      <animated.div className="App" style={props}>
        <header className="App-header">
          <div className="logo">LOGO</div>
          <button className="menu-button">Menu</button>
        </header>
      </animated.div>
    );
}

export default App;
