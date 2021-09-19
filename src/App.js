import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DesktopBackground from './images/pattern-background-desktop.svg';
import MobileBackground from './images/pattern-background-mobile.svg';
import Hero from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: 'auto',
    backgroundImage: `url(${DesktopBackground})`,
    backgroundColor: 'hsl(225, 100%, 94%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${MobileBackground})`,
    },
  },
  cardRoot: {
    margin: 50,
    maxWidth: 400,
    maxHeight: 600,
    [theme.breakpoints.down('sm')]: {
      minWidth: 330
    },
    borderRadius: 10
  },
  planContent: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 20, 
    width: 'auto',
    backgroundColor: '#f0faf9',
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 5,
      marginRight: 5
    },
  },
  changeText: {
    textDecoration: 'underline',
    color: 'hsl(245, 75%, 52%)',
    "&:hover": {
      textDecoration: 'none',
      color: 'hsl(224, 23%, 55%)'
    }
  },
  cancelOrder: {
    color: 'hsl(224, 23%, 55%)',
    "&:hover": {
      color: '#000000',
    }
  },
  commonButton: {
    textTransform: 'none'
  },
  paymentButton: {
    textTransform: 'none', 
    padding: 10, 
    borderRadius: 10
  },
  media: {
    height: 200,
  },
  
}))

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.cardRoot}>
        <CardMedia
          className={classes.media}
          image={Hero}
        />
        <CardContent>
          <Box mt={3}>
            <Typography gutterBottom variant="h5">
              <center><b>Order Summary</b></center>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <center>
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
              </center>
            </Typography>
            <Box className={classes.planContent}>
              <Box display='flex' flexDirection='row'>
              <img src={musicIcon} alt='music icon' />
              <Box ml={2}>
                <Typography><b>Annual Plan</b></Typography>
                <Typography variant='subtitle1' color='textSecondary'>$59.99/year</Typography>
              </Box>
              </Box>
              <Button className={classes.commonButton}>
                <Typography variant='subtitle2' className={classes.changeText}>
                  <b>Change</b>
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box px={4}>
            <Button color='primary' variant='contained' fullWidth className={classes.paymentButton}>
              <Typography variant='subtitle2'>
                Proceed to Payment
              </Typography>  
            </Button>
          </Box>
          <Box px={4} mt={2} display='flex' justifyContent='center'>
            <Button variant='none' className={classes.commonButton}>
                <Typography variant='subtitle2' className={classes.cancelOrder}>
                  <b>Cancel Order</b>
                </Typography>  
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>  
  )
}

export default App;