import React from 'react';
import CircleText from '../CircleText';

const Logo = (props) => {
  return (
    <div>
      <CircleText
        circleId='bailee'
        placement='top'
        fontStyle='heading-primary'
        size={props.size}
      >
        &nbsp;Bailee Dastugue
      </CircleText>
      <CircleText
        circleId='development'
        placement='bottom'
        fontStyle='heading-primary'
        size={props.size}
      >
        &nbsp;Development
      </CircleText>
    </div>
  );
};

export default Logo;
