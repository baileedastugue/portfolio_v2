// import React, { Children, Fragment, useRef } from 'react';
// import { useTransition, animated as a } from 'react-spring';

// const Trail = ({ inView, children }) => {
//   const ref = useRef();

//   const childrenArray = Children.toArray(children);
//   const trail = useTransition(childrenArray.length, {
//     config: { mass: 5, tension: 2000, friction: 1000 },
//     opacity: inView ? 1 : 0,
//     y: inView ? 0 : 20,
//     // height: inView ? '100%' : 0,
//     delay: 1000,
//     // duration: 1000,
//     from: { opacity: 0, y: 20, height: 0 },
//   });
//   return (
//     <Fragment>
//       {trail.map(({ height, ...style }, index) => (
//         <a.div key={index} style={style}>
//           <a.div>{items[index]}</a.div>
//         </a.div>
//       ))}
//     </Fragment>
//   );
// };

// export default Trail;
