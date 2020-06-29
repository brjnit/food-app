/**
 * DailyGet : Text Lable 1 (Size 35)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../Color'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.caption,
    fontSize:30,
    family:'roboto',
    weight: 'Bold',
    color: colors.blackText
  },
}));

const Text1 = props =>{
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>
}

export default Text1