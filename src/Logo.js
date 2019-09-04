import React, { useState, useEffect } from "react";
import { Spring, config } from "react-spring/renderprops";

const Logo = ({ children }) => {
  const [running, setRunning] = useState(1); // 0 reset, 1 run
  useEffect(() => {
    if (running === 0) {
      setRunning(1);
    }
  }, [running === 0]);

  return (
    <Spring
      delay={1200}
      config={config.molasses}
      reset={running === 0}
      onRest={() => {
        setRunning(0);
      }}
      from={{ transform: "translate(-50px, 0)" }}
      to={{ transform: "translate(50px, 0)" }}
    >
      {props => (
        <div style={{ ...props }} className="logo">
          {children}
        </div>
      )}
    </Spring>
  );
};

export default Logo;
