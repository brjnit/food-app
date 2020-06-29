import React, {Component} from 'react'
import {View, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native'
import Text5 from '../UI/Text/Text5'
import Text6 from '../UI/Text/Text6'
import {formatDateTime} from '../../util'
import { getLocalizedString } from '../../localization/i18n'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height : 80,
            width : 300,
        };
    }

    calculateHeight = (event) =>{
        const  { height, width} = event.nativeEvent.layout;
        this.setState({height : height * 0.8, width : width})
    }

    getBackgroudStyle = ()=>{
        let style = {};
        if(this.props.bannerImage == null ){
            style = styles.backgroundImage;
        }else{
            style =  [styles.backgroundImage, {width : this.state.width*0.95 - this.state.height * 0.25}]
        }
        
        return style;
    }

    getBannerTextContainerStyle = () =>{
        let style = {};
        if(this.props.bannerImage == null ){
            style = [styles.bannerTextContainer, {width:"90%", alignItems : "center"}]
        }else{
            style =  styles.bannerTextContainer
        }
        return style;
    }

    bannerClickHandler = () =>{
        //if(this.props.bannerImage != null ){
            this.props.onBannerExpand()
        //}
    }
    render(){
        let imageUri = this.props.bannerImage;
        //if(this.props.bannerImage == null || this.props.bannerImage == ""){
            imageUri = this.props.bannerBackgroudImage//"https://captainamericadiag618.blob.core.windows.net/uploaded-files/message_1892245454e53432323.jpg";
       // }
        let image = null;
        if(this.props.bannerImage != null){
            image = (
                <Image source = {{uri:this.props.bannerImage}} resizeMode = 'cover' style = {[styles.imageStyle, {height : this.state.height, width : this.state.height}]}/>
                )
        } 
        console.log("[Banner.js] bannerImage :: ", this.props.bannerImage)
        return (
            <View  style = {[styles.container, this.props.style]}>
                    <TouchableOpacity  style = {styles.bannerContainer} onLayout = {(e)=>this.calculateHeight(e)} onPress = { this.bannerClickHandler}>
                        
                        <Image source = {{uri:imageUri}} resizeMode = 'stretch' style = {this.getBackgroudStyle()}/>
                        
                        <View style = {this.getBannerTextContainerStyle()}>
                            <Text5 style = {styles.bannerText} numberOfLines = {1}>{this.props.bannerHeading}</Text5>
                            <Text6 numberOfLines ={2}>{this.props.bannerSubText}</Text6>
                        </View>
                        {image}
                    </TouchableOpacity>
                <View style = {styles.lastUpdatedView}>
                    <Text6 style = {styles.updatedText}>{getLocalizedString("last_updated") + formatDateTime(this.props.updatedTime)}</Text6>
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        justifyContent : 'center',
        marginBottom : 10,
        height : 120
    },
    bannerText : {
        fontWeight : Platform.OS=='ios'?'600' : '500',
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
        color : colors.gray01,
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

})

export default Banner