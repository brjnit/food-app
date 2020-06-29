import React from 'react'
import { Avatar } from '@material-ui/core'
import ImageAvatars from './ImageAvatars'
import Text1 from './Text/Text1'
import Text6 from './Text/Text6'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 345,
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    },

    horizontal: {
        display: "flex",
        flexDirection: "row",
        flexBasis: "a",
        flexFlow: "",

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
        <div className="row">
          
                <ImageAvatars small={false} src="https://captainamericadiag618.blob.core.windows.net/uploaded-files/partnerCoverPhoto_15439_1583485492.jpg" />
                
            <div className={classes.vertical}>
            <div className={classes.verticalText}>{props.longDescription} </div>
            <div className={classes.verticalText}>{props.longDescription} </div>
            </div>

        </div>
        <div className={classes.horizontalText}>
            <Text6 className = {classes.horizontalText}> Product description</Text6>
        </div>
        </div>
    )
}

export default HContainer

