/**
 * DailyGet : Text Lable 1 (Size 35)
 * @author: Prathamesh
 * @Url: 
 */

import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import colors from '../../../styles/colors'

const Line = props =>{
    
    return (
        <View style = {[styles.lineView, props.style]}>{props.children}</View>
    )
}
const styles = StyleSheet.create({
    lineView: {
       width : '100%',
       height : 1,
       backgroundColor : colors.gray00,
       //marginVertical : 10
    }
})
export default Line