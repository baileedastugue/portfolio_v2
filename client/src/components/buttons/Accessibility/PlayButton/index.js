import React from 'react';
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';

const PlayButton = ({ btnPaused, handlePlayPauseBtnClick }) => {
  return (
    btnPaused && (
      <PlayCircleOutlineSharpIcon
        fontSize='large'
        style={{ display: btnPaused ? 'block' : 'none', zIndex: 1000 }}
        onClick={handlePlayPauseBtnClick}
      />
    )
  );
};

export default PlayButton;
