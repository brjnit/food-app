/**
 * DailyGet : Text Lable 2 (Size 25)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../Color'
import { makeStyles, Typography } from '@material-ui/core'

 const styles = makeStyles({
    textHeading: {
        fontSize : 12,
        color : colors.blackText,
        fontFamily : 'roboto'
    }
  });

const Text6 = props =>(
    <Typography style = {styles.textHeading}>{props.children}</Typography>
)

export default Text6