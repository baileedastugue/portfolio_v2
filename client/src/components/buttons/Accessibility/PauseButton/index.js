import React from 'react';
import PauseCircleOutlineSharpIcon from '@material-ui/icons/PauseCircleOutlineSharp';

const PauseButton = ({ btnPaused, handlePlayPauseBtnClick }) => {
  return (
    !btnPaused && (
      <PauseCircleOutlineSharpIcon
        fontSize='large'
        style={{ display: btnPaused ? 'none' : 'block', zIndex: 1000 }}
        onClick={handlePlayPauseBtnClick}
      />
    )
  );
};

export default PauseButton;
