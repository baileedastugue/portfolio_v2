import React, { Fragment } from 'react';
import techStackData from '../../../data/techStackData.json';
import { List, ListItem, Typography } from '@material-ui/core/';

const TechStack = () => {
  return (
    <Fragment>
      <Typography variant='h2'>My Tech Stack</Typography>
      <List>
        {techStackData.map((tech, i) => (
          <ListItem>{tech.tech}</ListItem>
        ))}
      </List>
    </Fragment>
  );
};

export default TechStack;
