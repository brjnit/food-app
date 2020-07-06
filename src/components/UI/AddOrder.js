import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import colors from '../../Color'
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { getOrders } from '../../redux/actions/StoreActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "17%",
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "white",
    },
    plus: {
        backgroundColor: colors.textGreen,
        color: "white",
        fontSize: 22,
        '&:hover': {
            background: colors.textGreen
        }
    },
    minus: {
        backgroundColor: colors.textRed,
        color: "white",
        fontSize: 22,
        '&:hover': {
            background: colors.textRed
        }
    },
    add: {
        width: "17%",
        backgroundColor: colors.textGreen,
        color: "white",
        '&:hover': {
            background: colors.textGreen
        }
    },

    text: {
        fontSize: 22,
        family: 'roboto',
        color: colors.blackText,
        textAlign: 'center',
        justifyContent: 'center',
    },
}));

const AddOrder = ({viewData, productSelectHandler }) => {
    const classes = useStyles();
    const [orderAdded, setOrder] = useState(0)
    const orders = useSelector(state => state.landing.orders);
    const dispatch = useDispatch();
    const onPlus = () => {
        setOrder((prevOreder) => { return prevOreder + 1 })
        console.log("AddOrder ", viewData)
        productSelectHandler(orderAdded + 1,viewData.key, "")
    }
    const onMinus = () => {
        setOrder((prevOreder) => { return prevOreder - 1 })
        productSelectHandler(orderAdded - 1, viewData.key, "")
    }


    return (
        <div>
            {(orderAdded > 0) && (
                <div className={classes.root}>
                    <ButtonGroup size="small" disableElevation variant="contained" >
                        <Button className={classes.minus} onClick={onMinus}>-</Button>
                        <div className={classes.text}>{orderAdded} </div>
                        <Button className={classes.plus} onClick={onPlus} >+</Button>
                    </ButtonGroup>
                </div>)}
            {(orderAdded == 0) && (<Button className={classes.add} onClick={onPlus}>ADD</Button>)}
        </div>
    );
}

export default AddOrder
