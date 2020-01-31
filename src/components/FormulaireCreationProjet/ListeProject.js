import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  card: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    
      <div style={{backgroundColor:"#35bfe4", height:"100vh"}}>
    <AppBar position="static" style={{width:"100vw", backgroundColor:"#672f4e", display:"flex"}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <img src="/img/logo-geomoun-2x.png" style={{with:"40px", height:"40px"}}></img>
        <MenuIcon style={{marginLeft:"250px"}} />
        </Toolbar>
    </AppBar>

    <Card className={classes.card} style={{float:"right", margin:"5px"}}>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card className={classes.card} style={{float:"right", margin:"5px"}}>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card className={classes.card} style={{float:"right", margin:"5px"}}>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <img src="/img/sdg-06-1picto-fr.jpg" style={{justifyContent:"left",marginTop:"260px", width:"125px", height:"130px"}}></img>

    <Card className={classes.card} style={{float:"right", margin:"5px"}}>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 4
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    
    </div>
  );
}