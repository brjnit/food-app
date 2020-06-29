import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Storefront from '@material-ui/icons/Storefront';
import Message from '@material-ui/icons/Message';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Store');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Store" value="Store" icon={<Storefront />} />
      <BottomNavigationAction label="Inbox" value="Inbox" icon={<Message />} />
    </BottomNavigation>
  );
}