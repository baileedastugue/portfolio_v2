import React, { useState } from 'react';
import techStackData from '../../../data/techStackData.json';
import { Box, List, ListItem, Typography } from '@material-ui/core/';
import { InView } from 'react-intersection-observer';
import { makeStyles } from '@material-ui/core/styles';
import Trail from '../../Animations/Trail';

const useStyles = makeStyles((listLength) => ({
  root: {
    height: `calc(${listLength} * 30)`,
    fontSize: '1.2rem',
    '& li': {
      padding: '0 25px 10px',
    },
  },
}));

const TechStack = (props) => {
  const listLength = techStackData.length;
  const classes = useStyles(listLength);
  //eslint-disable-next-line
  const [inView, setInView] = useState(false);

  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>Tech Stack</Typography>
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
