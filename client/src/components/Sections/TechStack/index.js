import React from 'react';
import techStackData from '../../../data/techStackData.json';
import { Box, List, ListItem, Typography } from '@material-ui/core/';

const TechStack = (props) => {
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>My Tech Stack</Typography>
      <List>
        {techStackData.map((tech, i) => (
          <ListItem key={i}>{tech.tech}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechStack;
