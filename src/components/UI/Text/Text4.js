/**
 * DailyGet : Text Lable 2 (Size 25)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../Color'
import { makeStyles, Typography } from '@material-ui/core'

 const styles =  makeStyles((theme) => ({
    textHeading: {
        fontSize : 17,
        color : theme.props.color,
        fontFamily : 'roboto'
    }
  }));

const Text4 =  props =>(
    <Typography style = {styles.textHeading}>{props.children}</Typography>
)

export default Text4