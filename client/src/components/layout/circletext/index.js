import React from 'react';

const CircleText = (props) => {
     const hrefId = '#' + props.circleId;
     const circleClass = 'circular-' + props.placement + '--' + props.size;
     const textPlacement = (placement) => {
          let position;
          if (placement === 'top') {
               position = 'm 0 0 a 1 1 90 0 1 100 0';
          } else if (placement === 'bottom') {
               position = 'm 0 0 a 1 1 90 0 0 100 0';
          } else {
               position = 'm 0, 0 a 1,1 0 1,1 100,0 a 50,50 0 1,1 -100,0';
          }
          return position;
     };

     return (
          <div className='circular'>
               <svg className={circleClass} viewBox='0 0 100 100'>
                    <path
                         id={props.circleId}
                         d={textPlacement(props.placement)}
                    />
                    <text>
                         <textPath
                              xlinkHref={hrefId}
                              className={props.fontStyle}
                         >
                              {props.children}
                         </textPath>
                    </text>
               </svg>
          </div>
     );
};

export default CircleText;
