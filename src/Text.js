import React from "react";
import { useSpring, animated } from "react-spring";

const Text = ({ children }) => {
  const props = useSpring({
    from: {
      transform: "translate(0px, 0px)",
      color: "blue"
    },
    to: async next => {
      while (1) {
        await next({
          transform: "translate(-20px, 0)",
          color: "lightpink"
        });
        await next({
          transform: "translate(0, 0)",
          color: "red"
        });
        await next({
          transform: "translate(20px, 0)",
          color: "green"
        });
      }
    }
  });

  return (
    <animated.div style={props} className="logo">
      {children}
    </animated.div>
  );
};

export default Text;
