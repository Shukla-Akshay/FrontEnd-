import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    Height: 700,
  },
  media: {
    height: 200,
  },
  cardContent: {
    textAlign: 'center',
  },
});

const CardsItem = ({ item }) => {
  console.log(item.launch_success);
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={2}>
      <Card style={{ height: '100%' }} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.links.mission_patch}
            title='Rocket'
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {item.mission_name}
            </Typography>
          </CardContent>
          <div>
            <strong>Mission ids :</strong> <li>{item.mission_id}</li>
          </div>
          <div>
            <strong> Launch Year :</strong> {item.launch_year}
          </div>
          <div>
            <strong> Successfull Launch :</strong> {item.launch_success}
          </div>
          <div>
            <strong> Successfull Landing :</strong> {item.launch_landing}
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardsItem;
