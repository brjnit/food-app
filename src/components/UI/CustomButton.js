import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.props.background,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: '10% 10% 10% 10%',
    width: '80%',
    alignContent: 'center',
    padding: '0 30px',
    color: theme.props.textColor
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();
  return <Button className={classes.root}>{props.label} </Button>;
}