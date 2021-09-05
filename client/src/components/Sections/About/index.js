import React from 'react';
import { Typography, Box } from '@material-ui/core';

const About = (props) => {
  return (
    <Box id={props.id}>
      <Typography variant='h2'>About Bailee,</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
        accumsan ipsum, quis iaculis elit. Sed venenatis feugiat finibus.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae
        scelerisque ex.
      </Typography>
      <Typography paragraph>
        Vivamus pulvinar nibh odio, ac bibendum velit viverra a. Fusce ac tellus
        et leo ullamcorper facilisis a id sapien. Duis vestibulum erat interdum
        fringilla placerat. Maecenas ac ultrices turpis. In accumsan enim at
        eleifend iaculis. Sed erat justo, bibendum sed lorem vel, finibus
        venenatis est. Morbi in nulla sapien. Curabitur lacinia sem eu turpis
        ultrices interdum. Donec pharetra viverra ipsum, condimentum pretium
        ante pellentesque quis. Morbi est neque, vulputate sit amet eros in,
        semper tincidunt est. Maecenas volutpat mauris sed facilisis consequat.
        Sed a lacinia lorem, feugiat volutpat neque. Curabitur ac ullamcorper
        turpis. Aliquam mattis justo vestibulum convallis aliquet. Pellentesque
        justo elit, fringilla eget metus at, convallis ultrices felis. Maecenas
        sed nisi sit amet mauris porta luctus.
      </Typography>
    </Box>
  );
};

export default About;
