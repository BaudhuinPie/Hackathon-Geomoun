import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class CreationForm extends Component {
        shoot() {
            alert(`Spécifie la date, l'heure et le lien de ton évènement. Si tu as un lien de ton évènement sur un réseau social n'hésites pas à le rejouter. Chaque réseau social a sa spécialité: Twitter pour les messages politiques, facebook ou instagram pour des rassemblements sociaux,... `);
          }
        
    
    render() { 

  return (
    
    <Container component="main" maxWidth="xs" style={{backgroundColor:"#f06a38", height:"140vh"}}>
      <CssBaseline />
      <div>
      <Grid item xs={12} sm={6}>
      <AppBar position="static" style={{width:"90vw", backgroundColor:"#672f4e"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <img src="/img/logo-geomoun-2x.png" style={{with:"40px", height:"40px"}}></img>
          <MenuIcon style={{marginLeft:"200px"}} />
        </Toolbar>
      </AppBar>
      </Grid>
        <Typography style={{textAlign:"center", fontSize:"30px", color:"white"}}>
        Crée ton projet
        </Typography>
        <Button
            type="submit"
            fullWidth
            variant="contained" 
            style={{borderRadius:"20px", backgroundColor:"#fac332", borderRadius:"20px", marginTop:"5px"}}
          >
            Initiative
            
          </Button>
        <form noValidate>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white", marginTop:"5px"}}>
        Titre <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
            <Typography style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Description de la problématique<Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}

    />
            </Grid>
            <Grid container spacing={2}></Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Solution au problème <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
            </Grid>
            <Grid container spacing={2}></Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white", marginBottom:"5px"}}>
            Images - vidéos - audios <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
            <Button
            type="submit"
            variant="contained"
            color="white"
            style={{borderRadius:"20px", marginBottom:"10px"}}
          >
            Fichier
          </Button>
          
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Quel besoin <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Comment nous aider <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", marginBottom:"2vh", borderRadius:"20px"}}
    />
            </Grid>

            <hr style={{border:"1px solid white", marginBottom:"10px"}}/>

            <Button
            type="submit"
            fullWidth
            variant="contained" 
            style={{borderRadius:"20px", backgroundColor:"#fac332", borderRadius:"20px", marginTop:"5px"}}
          >
            Contact
          </Button>
            </Grid>
            
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left" ,fontSize:"20px", color:"white"}}>
            Evènement<Button style={{position:"relative"}} onClick={this.shoot}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Nos contributeurs <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"20px", color:"white"}}>
            Mon groupe de discution <Button style={{position:"relative"}}><div style={{backgroundColor:"white", borderRadius:"50%", width:"2rem"}}>?</div></Button></Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"5vh",fontSize:"15px", borderRadius:"20px", marginTop:"5px"}}
    />
            </Grid>
          </Grid>
          
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
  }
}
export default CreationForm;