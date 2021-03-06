/*
Author: Brajesh Kumar
*/

import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux'
import List from '@material-ui/core/List';
import { getPartnerLists } from '../../redux/actions/StoreActions';
import Header from '../../components/Header/Header';
import PartnerListItem from '../../components/PartnerListItem';
import { Redirect } from 'react-router-dom';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        //background: ' #FFFFF0 ',
        border: 0,
        borderRadius: 3,
        width: '100%',
        alignItems: 'center',

    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: 5
    },
}));

const Partenrs = (props) => {
    const partnersList = useSelector(state => state.partners.partnersList);
    //const dispatch = useDispatch();
    const classes = useStyles()
    const [isNavigate, setNavigate] = useState(false)
    const [id, setID] = useState(0)
    // useEffect(() => {

    //     dispatch(getPartnerLists("456"));
    //     // return () => {
    //     //     disconnect();
    //     //  }
    // }, []
    // );

    const handleListItemClick = (event, info) => {
        setID(info.id)
        setNavigate(true)
        props.history.push("/partners/")
    };

    const isLaoding = useSelector(state => state.loading.showLoader);
    if (isLaoding) {
        return (<FullPageLoader/>)
    }

    return (
        <div>
            {isNavigate && <Redirect to={`/partners/${id}` } from="/partners" />}
            {!isNavigate && (<div className={classes.root}>
            <Header title="Express Eats" />
                <List className={classes.list} component="nav">
                    {(partnersList !== null) && partnersList.map(info => {
                        return <PartnerListItem key={info.id} PartnerData={info}
                            onSelected={event => handleListItemClick(event, info)}
                        />
                    }
                    )}
                </List>
                </div>)}


        </div>)
}

export default Partenrs;