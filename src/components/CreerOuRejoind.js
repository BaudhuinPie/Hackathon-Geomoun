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


const CreerOuRejoind=() =>{
    
        return (
            <div>
                <AppBar position="static" style={{width:"100vw", backgroundColor:"#672f4e", display:"flex"}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <img src="/img/logo-geomoun-2x.png" style={{with:"40px", height:"40px"}}></img>
        <MenuIcon style={{marginLeft:"250px"}} />
        </Toolbar>
    </AppBar>

    <div style={{backgroundColor:"#35bfe4",height:"28vh"}}>
    <img src="/img/sdg-06-picto-fr.jpg" style={{with:"200px", height:"200px", marginLeft:"85px"}}></img>
    </div>
    <Button
            type="submit"
            fullWidth
            variant="contained" 
            style={{borderRadius:"20px", backgroundColor:"#174a6a", borderRadius:"20px", marginTop:"200px", color:"white"}}
          >
            Rejoindre un projet
            
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained" 
            style={{borderRadius:"20px", backgroundColor:"#f06a38", borderRadius:"20px", marginTop:"50px", color:"white"}}
          >
            Créer un projet
            
          </Button>
            </div>
        )
    }


export default CreerOuRejoind;
