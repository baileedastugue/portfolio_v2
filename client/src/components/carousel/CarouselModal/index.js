import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100vw',
    maxHeight: '100%',
    margin: '0 auto',
    [theme.breakpoints.up(1024)]: {
      maxWidth: '75vw',
    },
    [theme.breakpoints.up(1400)]: {
      maxWidth: '60vw',
    },
  },
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: '5%',
  },
  closeBtn: {
    position: 'absolute',
    top: '1%',
    left: '98%',
    padding: 0,
    minWidth: 'unset',
    transform: 'translateX(-100%)',
    '& span': {
      width: 'unset',
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:active': {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.up(768)]: {
      left: '99%',
    },
  },
}));

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const CarouselModal = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby=''
        aria-describedby=''
        className={classes.modal}
        open={props.modalOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalOpen}>
          <div className={classes.paper}>
            <Button
              onClick={props.handleClose}
              className={classes.closeBtn}
              label='Close Modal'
              aria-label='Close Modal'
            >
              <HighlightOffSharpIcon fontSize='medium' />
            </Button>
            {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CarouselModal;
