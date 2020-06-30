import React from 'react'
import { Avatar } from '@material-ui/core'
import ImageAvatars from './ImageAvatars'
import Text1 from './Text/Text1'
import Text6 from './Text/Text6'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        "& > * + *": {
            marginTop: theme.spacing(2)
        },
        display: "flex",
    },

    horizontal: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        flexBasis: "a",

        backgroundColor: "green"
    },
    horizontalText: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    vertical: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "auto",
        flexWrap: "wrap",
        flexShrink: "0",
    },

    verticalText: {
        marginLeft: 10,
        marginTop: 5
    }
}));

const HContainer = (props) => {
    const classes = useStyles();
    return (<div >
        <div className={classes.horizontal}>
          
                <ImageAvatars small={false} src="https://captainamericadiag618.blob.core.windows.net/uploaded-files/partnerCoverPhoto_15439_1583485492.jpg" />
                
            <div className={classes.vertical}>
            <div className={classes.verticalText}>{props.longDescription} </div>
            <div className={classes.verticalText}>{props.longDescription} </div>
            </div>

        </div>
        <div className={classes.root}>
            <Text6 className = {classes.horizontalText}> Product description</Text6>
        </div>
        </div>
    )
}

export default HContainer

