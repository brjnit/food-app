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
    fontSize:18,
    family:'roboto',
    weight: 'Bold',
    color: colors.blackText
  },
}));

const Text3 = props =>{
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>
}

export default Text3