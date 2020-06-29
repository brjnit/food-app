/**
 * DailyGet : Text Lable 2 (Size 25)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../Color'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.caption,
    fontSize:24,
    family:'roboto',
    weight: 'Bold',
    color: theme.props.color
  },
}));

const Text2 = props =>{
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>
}

export default Text2