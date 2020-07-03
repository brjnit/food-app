import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
}));


function ReviewModal(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleConfirm = () => {console.log("order successful")}
  const styles = useStyles()
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.orders != null && props.orders.map(item => {
            return (<div>
              <div>{item.itemName}</div>
              <div>{item.amount}</div>
              <div>{item.quantity} </div>
            </div>)
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewModal;