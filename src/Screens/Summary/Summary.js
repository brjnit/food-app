/*
Author: Brajesh Kumar
*/

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';
import { ButtonBlue } from '../../components/UI/Button';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3
    },
    footer: {
        marginBottom: 40,
        marginTop: 30,
        marginRight: 16,
        marginLeft: 16
    },

    button: {
        width: '100%',
        height: 48,
    }
});
const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
  ];
  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  

const Summary = (props) => {
    const classes = useStyles();
    const orders = [{
        itemName: "chapati",
        amount: 20,
        quantity: 4
    }, {
        itemName: "Curry",
        amount: 20,
        quantity: 4
    }]
    const onPressDone = () => {
        props.history.goBack()
    }

    return (
        <Wrapper>

            <Header title="Summary" />
            <TableContainer >
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Desc</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders != null && orders.map((row) => (
                            <TableRow key={row.itemName}>
                                <TableCell>{row.itemName}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{ccyFormat(row.amount)}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.footer}>
                <ButtonBlue className={classes.button} onClick={onPressDone}> Done </ButtonBlue>
            </div>
        </Wrapper>
    )
}

export default Summary;