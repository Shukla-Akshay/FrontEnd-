import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import { AppBar, Toolbar } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  SpaceXContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

const SpaceX = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            SpaceX
          </Typography>
        </Toolbar>
      </AppBar>

      <Cards isLoading={isLoading} items={items} />
    </div>
  );
};

export default SpaceX;
