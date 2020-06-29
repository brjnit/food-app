/**
 * DailyGet : Text Lable 2 (Size 25)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../color'
import { makeStyles } from '@material-ui/core'

 const styles = makeStyles({
    textHeading: {
        fontSize : 17,
        color : theme.props.color,
        fontFamily : 'roboto'
    }
  });

const Text5 =  props =>(
    <Typography style = {styles.textHeading}>{props.children}</Typography>
)

export default Text5