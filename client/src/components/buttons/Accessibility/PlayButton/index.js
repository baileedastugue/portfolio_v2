import React from 'react';
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import { Button } from '@material-ui/core';

const PlayButton = ({ btnPaused, handlePlayPauseBtnClick }) => {
  return (
    btnPaused && (
      <Button>
        <PlayCircleOutlineSharpIcon
          fontSize='large'
          style={{ display: btnPaused ? 'block' : 'none', zIndex: 1000 }}
          onClick={handlePlayPauseBtnClick}
        />
      </Button>
    )
  );
};

export default PlayButton;
