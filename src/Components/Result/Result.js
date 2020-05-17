import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import * as actions from '../../store/action/rootAction';
import Startup from '../Startup/Startup';

const useStyles = makeStyles((theme, props) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginRight: theme.spacing(15) * 2,
      marginLeft: theme.spacing(3) * 2,

      padding: `${theme.spacing(5)}px 0 ${theme.spacing(5)}px 0`,
    },
    width: '40%',
    height: '50%',
    top: '18%',
    left: '15%',
    backgroundColor: theme.secondary.main,
    border: '2px solid #393E46',
    borderRadius: '22px',
    boxShadow: '0px 5px 31px -3px rgba(0,0,0,0.50)',
  },

  typography: {
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`,
    color: '#eeeeee',
    fontWeight: 400,
    fontSize: '2em',
  },
}));

const Result = ({ questionCount }) => {
  const classes = useStyles();
  const score = useSelector((state) => state.user.score);
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    dispatch(actions.getScore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clicked = () => {
    setShowComponent(true);
  };
  return (
    <div>
      {showComponent ? (
        <Startup />
      ) : (
        <div className={classes.layout}>
          <Paper className={classes.paper} elevation={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                className={classes.typography}
                component="h2"
                variant="h4"
                gutterBottom
              >
                Total Question: {questionCount}
              </Typography>
              <Typography
                className={classes.typography}
                component="h2"
                variant="h4"
                gutterBottom
              >
                You Scored : {score}
              </Typography>
              <Button onClick={clicked}>New Game</Button>
            </Box>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Result;
