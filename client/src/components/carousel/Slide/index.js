import react from 'react';

const Slide = (props) => {
  return <div className='carousel-item'>{props.children}</div>;
};

export default Slide;
