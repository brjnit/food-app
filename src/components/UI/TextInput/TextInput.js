import React, {Component, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../Color'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    inputField : {
        width : '80%',
        borderColor : colors.gray03,
        marginLeft : '5%',
        fontSize : 15,
        borderWidth : 1,
        padding : 10,
        paddingTop : 10,
        borderRadius : 5,
        focus: {
            borderColor: colors.textRed
        }
    }
  });

const TextInputField = (props) => {

        const styles = useStyles();
    return(
        <div>
        <TextField className= {styles.inputField}
          id="outlined-full-width"
          label="Label"
          placeholder= "Placeholder"
          helperText= "Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
    )
}

export default TextInputField