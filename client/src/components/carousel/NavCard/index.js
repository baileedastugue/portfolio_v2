import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
     Card,
     CardActionArea,
     CardMedia,
     CardContent,
     Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
     root: {
          maxWidth: 445,
          display: 'flex',
     },
});

const NavCard = (props) => {
     const classes = useStyles();

     return (
          <Card className={classes.root}>
               <CardActionArea>
                    <CardMedia
                         component='img'
                         alt={props.alt}
                         image={props.url}
                         title={props.title}
                    />
                    <CardContent>
                         <Typography variant='h2'>{props.nav}!!!</Typography>
                    </CardContent>
               </CardActionArea>
          </Card>
     );
};

export default NavCard;
