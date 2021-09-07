import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: (styleProps) => ({
    alignItems: 'center',
    backgroundImage: styleProps.backgroundImage,
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  }),
  navTitle: {
    textTransform: 'uppercase',
    wordWrap: 'break-word',
    fontSize: '4rem',
    letterSpacing: '.1rem',
    listStyleType: 'none',
  },
  navDetails: {
    opacity: 0,
  },
}));

const NavCard = ({ slide }) => {
  const { name, backgroundUrl } = slide;
  const styleProps = {
    backgroundImage: `url(${backgroundUrl})`,
  };
  const classes = useStyles(styleProps);

  return (
    <Link
      className={slide.id === 0 ? 'active' : ''}
      to={slide.navId}
      smooth={true}
      spy={true}
    >
      <CardContent className={`card-nav ${classes.root} `}>
        <Typography
          variant='h2'
          component='li'
          listStyleType='none'
          className={`card-nav--title ${classes.navTitle}`}
        >
          {name}
        </Typography>
      </CardContent>
    </Link>
  );
};

export default NavCard;
