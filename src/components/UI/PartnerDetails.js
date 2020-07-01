import React from 'react'
import ImageAvatars from './ImageAvatars'
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
        flexDirection: "row"
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
        marginTop: 20
    },

    verticalText: {
        marginLeft: 10,
    }
}));

const PartnerDetails = ({ partnerViewData }) => {
    const classes = useStyles();
    return (<div >
        <div className={classes.horizontal}>
            <ImageAvatars small={false} src={partnerViewData.image}/>
            <div className={classes.vertical}>
                <div className={classes.verticalText}>{partnerViewData.name} </div>
                <div className={classes.verticalText}>{partnerViewData.contactNumber} </div>
                <div className={classes.verticalText}>{partnerViewData.address} </div>
            </div>
        </div>
        <div className={classes.root}>
            <div className={classes.verticalText}>{partnerViewData.description} </div>
        </div>
    </div>
    )
}

export default PartnerDetails

