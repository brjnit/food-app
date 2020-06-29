import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: theme.props.backgroundColor,
    height: theme.props.height,
    width: theme.props.height,
  },
  rounded: {
    color: '#fff',
    backgroundColor: theme.props.backgroundColor,
    height: theme.props.height,
    width: theme.props.height,
  },
}));

export default function CustomImage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="square" src={props.src}  className={classes.square}>
       {props.children}
      </Avatar>
    </div>
  );
}
