import React, { Children, Fragment, useState } from 'react';
import { useTrail, animated } from 'react-spring';

const Trail = ({ inView, children }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const childrenArray = Children.toArray(children);
  const trail = useTrail(childrenArray.length, {
    config: { mass: 1, tension: 120, friction: 14 },
    opacity: inView || animationComplete ? 1 : 0,
    x: inView || animationComplete ? 0 : 20,
    height: inView || animationComplete ? 20 : 0,
    delay: 500,
    from: { opacity: 0, x: 20, height: 20 },
    onRest: () => inView && setAnimationComplete(true),
  });

  return (
    <Fragment>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div style={{ height }}>{childrenArray[index]}</animated.div>
        </animated.div>
      ))}
    </Fragment>
  );
};

export default Trail;
