/*
Author: Brajesh Kumar
*/

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: '400px',
    height: '400px',
  }
}));

const FullPageLoader = (props) => {
    const classes = useStyles();
    return (<div className = {classes.root}>
   <CircularProgress className = {classes.loading} />
        
    </div>)
}

export default  FullPageLoader