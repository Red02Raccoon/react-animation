import React, { useRef, useEffect } from "react";
import { useSpring, interpolate, animated } from "react-spring";

const info = [
  {
    id: 1,
    image: "http://www.unoosa.org/res/timeline/index_html/space-2.jpg",
    text:
      "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, "
  },
  {
    id: 2,
    image:
      "https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/autumn-2872-3b0957553463684522b9dba54089ed8f@1x.jpg",
    text:
      "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, "
  },
  {
    id: 4,
    image: "http://www.unoosa.org/res/timeline/index_html/space-2.jpg",
    text:
      "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, "
  },
  {
    id: 4,
    image:
      "https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/autumn-2872-3b0957553463684522b9dba54089ed8f@1x.jpg",
    text:
      "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, "
  }
];

const useCustomAnim = (rowRef, reverse) => {
  const [{ y, value }, set, stop] = useSpring(() => ({
    y: 0,
    value: 0
  }));

  const animationSettings = interpolate(
    [y, value],
    (y, value) => `translate3d(0px, ${y + value / 30}px, 0px)`
  );

  const onScroll = () => {
    const block = rowRef.current;
    const { top } = block.getBoundingClientRect();

    const newValue = reverse ? -top * 2 : top * 3;
    return set({ value: newValue });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return animationSettings;
};

const ParallaxRow = ({ id, isRightAlign, text, image }) => {
  const rowRef = useRef();

  const animationSettingsImage = useCustomAnim(rowRef);
  const animationSettingsText = useCustomAnim(rowRef, true);

  return (
    <div key={id} className="parallax-row" ref={rowRef}>
      <div className={`parallax-inner ${isRightAlign && "right"}`}>
        <animated.div
          className="parallax-image-wrap"
          style={{
            transform: animationSettingsImage
          }}
        >
          <img src={image} className="parallax-image" alt="" />
        </animated.div>
        <animated.div
          className="parallax-text"
          style={{
            transform: animationSettingsText
          }}
        >
          {text}
        </animated.div>
      </div>
    </div>
  );
};

const ParallaxSection = () => {
  return (
    <div className="parallax-block">
      {info.map((item, index) => {
        const isRightAlign = (index + 1) % 2 === 0;
        return <ParallaxRow {...item} isRightAlign={isRightAlign} />;
      })}
    </div>
  );
};

export default ParallaxSection;
