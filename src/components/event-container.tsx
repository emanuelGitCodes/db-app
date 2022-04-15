
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../user-store'
import { styled } from '@mui/material/styles'
import {Avatar, Card, CardHeader, CardContent, CardActions, CardMedia, Collapse, Typography, IconButton, IconButtonProps} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: 'white',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const EventContainer = (props: { // props types
  eventTitle:string,
  eventOrg:string,
  eventLogo:string,
  eventImage:string,
  eventTime:string,
  eventDate:string,
  eventDescription:string,
  eventIndex: number, })=> {

  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <Card sx={{
        maxWidth: '100%', marginTop: 1,
        color:'white', backgroundColor:'primary.dark'}}
        onClick={() => {
          dispatch({
            type: 'checking_event', value: { checkingEvent: props.eventIndex }
          })
          console.log('work')
          navigate(`/event/${props.eventIndex}`)
        }}
      >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'text.disabled' }} aria-label='recipe'>
            {props.eventLogo}
          </Avatar>
        }
        action={ // An action that the card should produce.
           // Represents the setting burger
          <IconButton aria-label='settings' color='inherit'>
            <MoreVertIcon />
          </IconButton>
        }
        color='white'
        title={props.eventTitle}
        subheader={props.eventDate}
      />

      <CardMedia
        component='img'
        height='250'
        image={props.eventImage}
        alt='Event Image'// Image Alt text
      />

      <CardContent color='inherit'>
        <Typography variant='h6' align='right' fontWeight='700' >
          Org Name: {props.eventOrg}
        </Typography>
        <Typography variant='body2'>
          {props.eventDescription}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' color='inherit'>
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share" color='inherit'>
          <ShareIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more' >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Extra space for a larger description
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventContainer