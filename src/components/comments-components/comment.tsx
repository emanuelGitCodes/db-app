import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const AlignItemsList = (props: {
  name:string;
  image: string;
  comment: string;
  date: string;
  time: string; }) => {

  return (
    <ListItem alignItems="flex-start" sx={{color:'white'}}>
      <ListItemAvatar>
        <Avatar alt={`image ${props.name}`} src={props.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography component='span' fontWeight='700' >

            {/* {props.name}: */}
            {props.comment}
          </Typography>
        }
        // secondary={
        //   <React.Fragment>
        //     <Typography
        //       sx={{ display: 'inline'}}
        //       component="span"
        //       variant="body2"
        //       color='white'
        //     >
        //       {props.comment}
        //     </Typography>
        //   </React.Fragment>
        // }
      />
    </ListItem>
  )
}

export default AlignItemsList