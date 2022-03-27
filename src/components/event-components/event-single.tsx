
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton' // Every Icon requires a specific color.
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

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

const SingleEventContainer = (props: { // props types
  eventTitle:string,
  eventOrg:string,
  eventLogo:string,
  eventImage:string,
  eventTime:string,
  eventDate:string,
  eventDescription:string })=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <Card sx={{
        maxWidth: '100%', marginTop: 1,
        color:'white', backgroundColor:'primary.dark'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'text.disabled' }} aria-label='recipe'>
            {props.eventLogo}
          </Avatar>
        }
        color='white'
        title={
          <Typography variant='h6' align='left' fontWeight='700' >
            {props.eventTitle}
          </Typography>

        }
        subheader={
          <Typography variant='subtitle2' align='left' fontWeight='400' >
            {props.eventDate}
          </Typography>
        }
      />

      <CardMedia
        component='img'
        height='250'
        image={props.eventImage}
        alt='Event Image'// Image Alt text
      />

      <CardContent color='inherit'>
        <Typography variant='h6' align='left' fontWeight='700' >
          Org Name: {props.eventOrg}
        </Typography>
        <Typography paragraph>
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

      </CardActions>
    </Card>
  );
}

export default SingleEventContainer