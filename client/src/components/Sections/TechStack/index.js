import React, { useState } from 'react';
import techStackData from '../../../data/techStackData.json';
import { Box, List, ListItem, Typography } from '@material-ui/core/';
import { InView } from 'react-intersection-observer';
import { makeStyles } from '@material-ui/core/styles';
import Trail from '../../Animations/Trail';

const useStyles = makeStyles({
  root: {
    height: '200px',
  },
});

const TechStack = (props) => {
  const classes = useStyles();

  //eslint-disable-next-line
  const [inView, setInView] = useState(false);

  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>My Tech Stack</Typography>
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <List ref={ref} className={classes.root}>
            <Trail inView={inView}>
              {techStackData.map((tech, i) => (
                <ListItem key={i}>{tech.tech}</ListItem>
              ))}
            </Trail>
          </List>
        )}
      </InView>
    </Box>
  );
};

export default TechStack;
