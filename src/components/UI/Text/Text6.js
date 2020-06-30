/**
 * DailyGet : Text Lable 2 (Size 25)
 * @author: Brajesh
 * @Url: 
 */

import React from 'react'
import colors from '../../../Color'
import { makeStyles, Typography } from '@material-ui/core'

 const styles = makeStyles((theme) => ({
    textHeading: {
        fontSize : 8,
        color : theme.props.color,
        fontFamily : 'roboto'
    }
  }));

const Text6 = props =>(
    <div className = {styles.textHeading}>{props.children}</div>
)

export default Text6