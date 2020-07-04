import React, { useState } from 'react'
import { Text17gray00, Text17gray06 } from '../UI/Text/Text'
import { makeStyles } from '@material-ui/core/styles';
import Color from '../../Color'
import { isMobile } from 'react-device-detect';

const useStyles = {
    root: {
        marginTop: 10,
        flexGrow: 1,
        height: 120,
        width: "100%",
        backgroundColor: 'brown'
    },

    title: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center"
    },

    container: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 10,
        height: 120
    },
    bannerText: {
        fontWeight: isMobile ? '600' : '500',
        marginBottom: 5,
    },
    lastUpdatedView: {
        //width: '95%',
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        //marginRight : '5%',
        marginBottom: 5
    },
    updatedText: {
        fontStyle: 'italic',
        color: Color.gray01,
    },
    bannerContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    bannerTextContainer: {
        height: '100%',
        width: '65%',
        marginLeft: '5%',
        justifyContent: 'center',
        zIndex: 1,
    },
    imageStyle: {
        borderColor: 'white',
        borderWidth: 4, borderRadius: 3,
        marginRight: '5%',
        zIndex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    },
    shareButton: {
        position: 'absolute',
        right: 20,
        top: 10,
        zIndex: 3
    }
};

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
    return (

        // bannerImage = {bannerData.imageUrl}
        //             // bannerBackgroudImage = ""
        //              width ="100%"
        //              bannerText= {bannerData.offering}
        //              bannerHeading = "Discont"
        //              bannerSubText= {bannerData.offeringSubText}
        //              updatedTime= {bannerData.updateDate}
        <div>
            <div style={useStyles.root}>
                <div >{props.bannerHeading}</div>
                <div >{props.bannerSubText}</div>
                <Text17gray06 style={useStyles.bannerText}>{props.bannerText}</Text17gray06>
                <img src={imageUri}  style={useStyles.imageStyle} />
            </div>
            <div style={useStyles.lastUpdatedView}>  <div style={useStyles.bannerText}> Updated {props.updatedTime}</div> </div>

        </div>
    )

}

export default Banner