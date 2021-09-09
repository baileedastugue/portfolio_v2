import React from 'react';
import PauseCircleOutlineSharpIcon from '@material-ui/icons/PauseCircleOutlineSharp';
import { Button } from '@material-ui/core';

const PauseButton = ({ btnPaused, handlePlayPauseBtnClick }) => {
  return (
    !btnPaused && (
      <Button>
        <PauseCircleOutlineSharpIcon
          fontSize='large'
          style={{ display: btnPaused ? 'none' : 'block', zIndex: 1000 }}
          onClick={handlePlayPauseBtnClick}
        />
      </Button>
    )
  );
};

export default PauseButton;
