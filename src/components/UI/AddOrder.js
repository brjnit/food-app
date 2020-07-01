import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import colors from '../../Color'
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBlue } from '../UI/Button';
import { getOrders } from '../../redux/actions/StoreActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
    },

    text: {
        fontSize: 17,
        family: 'roboto',
        color: colors.blackText
    },

    buttonAdd: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
    }
}));

const AddOrder = ({productSelectHandler}) => {
    const classes = useStyles();
    const [orderAdded, setOrder] = useState(0)
    const orders = useSelector(state => state.landing.orders);
    const dispatch = useDispatch();
    const onPressAdd = () => {
        setOrder((prevOreder) => { return prevOreder + 1 })
        dispatch(getOrders(orderAdded))
    }
    const onPressRemove = () => {
        setOrder((prevOreder) => { return prevOreder - 1 })
        dispatch(getOrders(orderAdded))
    }

    if (orderAdded > 0) {
        return (
            <div className= {classes.buttonAdd}> <button onClick={onPressRemove}> - </button>
                <div> {orderAdded} </div>
                <button onClick={onPressAdd}> + </button>
            </div>)
    } else {
        return (
            <ButtonBlue className={classes.margin5} onClick={onPressAdd}> Add</ButtonBlue>
        )
    }
}

export default AddOrder