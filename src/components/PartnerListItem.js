import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  marginLeft: {
      marginLeft: 20,
      height: '100%',
      alignContent:'center'
  },
  listItem: {
    height: '100%'
}
}));

function PartnerListItem(props) {
    const classes = useStyles();
  return (
<div>
    <ListItem alignItems="flex-start" onClick = {event => props.onSelected(event)} className = {classes.listItem}>
        <ListItemAvatar>
          <Avatar className = {classes.large} alt="Remy Sharp" src={props.PartnerData.imageUrl} />
        </ListItemAvatar>
        <ListItemText className = {classes.marginLeft}
          primary={props.PartnerData.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {props.PartnerData.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider/>
      </div>
  );
}

export default PartnerListItem;