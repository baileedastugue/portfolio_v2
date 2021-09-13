import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: (styleProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: '100%',
    border: '1px solid transparent',
    '&:hover': {
      borderColor: theme.palette.primary.light,
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  }),
  navTitle: {
    textTransform: 'capitalize',
    fontSize: '2.5rem',
    letterSpacing: '.1rem',
    listStyleType: 'none',
    fontFamily: ['Vidaloka', 'serif'].join(','),
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
