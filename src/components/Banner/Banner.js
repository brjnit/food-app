import React, {Component, useState} from 'react'
import Text5 from '../UI/Text/Text5'
import Text6 from '../UI/Text/Text6'
//import {formatDateTime} from '../../util'
//import { getLocalizedString } from '../../localization/i18n'
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../Color'
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 65,
        width: "100%"
    },

    title: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center"
    },

    container : {
        width : '100%',
        justifyContent : 'center',
        marginBottom : 10,
        height : 120
    },
    bannerText : {
        fontWeight : isMobile ?'600' : '500',
        marginBottom : 5,
    }, 
    lastUpdatedView : {
        width : '95%',
        marginTop : 5,
        alignItems : 'flex-end',
        marginRight : '5%',
        marginBottom : 5
    },
    updatedText : {
        fontStyle : 'italic',
        color : Color.gray01,
    },
    bannerContainer : {
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent : "space-between",
    },
    bannerTextContainer : {
        height : '100%',
        width : '65%',
        marginLeft : '5%',
        justifyContent : 'center',
        zIndex : 1,
    },
    imageStyle :{
        borderColor : 'white', 
        borderWidth : 4, borderRadius : 3, 
        marginRight : '5%',
        zIndex : 1
    },
    backgroundImage : {
        height : '100%',
        width : '100%',
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 0
    },
    shareButton : {
        position : 'absolute',
        right : 20,
        top : 10,
        zIndex : 3
    }
}));

/*
Banner Props : 
bannerImage
bannerBackgroudImage
width
bannerText
bannerHeading
bannerSubText
updatedTime
*/

const Banner = (props) => {
    const [height, setHeight] = useState(80)
    const [width, setWidth] = useState(props.width)
    let imageUri = props.bannerImage;
    const styles = useStyles()
    const calculateHeight = (event) =>{
        setHeight({height : height * 0.8})
        setWidth({width : width})
    }

    const getBackgroudStyle = ()=>{
        let style = {};
       
        if(props.bannerImage == null ){
            style = [styles.backgroundImage];
        }else{
            style =  [styles.backgroundImage, {width : width*0.95 - height * 0.25}]
        }
        
        return style;
    }

    const getBannerTextContainerStyle = () =>{
        let style = {};
        if(props.bannerImage == null ){
            style = [styles.bannerTextContainer, {width:"90%", alignItems : "center"}]
        }else{
            style =  [styles.bannerTextContainer]
        }
        return style;
    }

    const bannerClickHandler = () =>{
        //if(props.bannerImage != null ){
            props.onBannerExpand()
        //}
    }
 
        
        //if(props.bannerImage == null || props.bannerImage == ""){
            imageUri = props.bannerBackgroudImage//"https://captainamericadiag618.blob.core.windows.net/uploaded-files/message_1892245454e53432323.jpg";
       // }
        let image = null;
        if(props.bannerImage != null){
            image = (
                <img src = {{uri:props.bannerImage}} resizeMode = 'cover'  style = {[styles.imageStyle, {height : height, width : height}]}/>
                )
        } 
        console.log("[Banner.js] bannerImage :: ", props.bannerImage)
        return (

            <div  className = {[styles.container, props.style]}>
                    <button  className = {styles.bannerContainer} onLayout = {(e)=>calculateHeight(e)} onPress = { bannerClickHandler}>
                        
                        <img src = {{uri:imageUri}} resizeMode = 'stretch' style = {getBackgroudStyle()}/>
                        
                        <div className = {getBannerTextContainerStyle()}>
                            <Text5 style = {styles.bannerText} numberOfLines = {1}>{props.bannerHeading}</Text5>
                            <Text6 numberOfLines ={2}>{props.bannerSubText}</Text6>
                        </div>
                        {image}
                    </button>
                <div className = {styles.lastUpdatedView}>
                    <Text6 className = {styles.updatedText}> formatDateTime(props.updatedTime)}</Text6>
                </div>
            </div>
        )
      
}

export default Banner