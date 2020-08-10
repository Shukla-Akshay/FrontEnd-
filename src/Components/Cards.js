import React from 'react';
import CardItem from './CardsItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContainer: {
    paddingTop: '30px',
  },
  margin: {
    paddingLeft: '400px',
    paddingTop: '20px',
  },
});

const Cards = ({ items, isLoading }) => {
  const classes = useStyles();
  return isLoading ? (
    <h1>is Loading .. </h1>
  ) : (
    <section>
      <Grid container direction='column'>
        <Grid item container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10}>
            <Grid container spacing={2} className={classes.cardContainer}>
              {items.map((item) => (
                <CardItem key={item.flight_number} item={item}></CardItem>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Cards;
