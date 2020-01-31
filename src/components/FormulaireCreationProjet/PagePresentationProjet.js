import React from 'react';
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


const PagePresentationProjet = ()=> {

  return (
    
    <Container component="main" maxWidth="xs" style={{backgroundColor:"#f06a38", height:"180vh"}}>
      <CssBaseline />
      <div>
      <Grid item xs={12} sm={6}>
      <AppBar position="static" style={{width:"90vw", backgroundColor:"#672f4e"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <img src="/logo-geomoun-2x.png" style={{with:"40px", height:"40px"}}></img>
          <MenuIcon style={{marginLeft:"200px"}} />
        </Toolbar>
      </AppBar>
      </Grid>
        <Typography style={{textAlign:"center", fontSize:"30px", color:"white", marginTop: "40px"}}>
        Construction d'une école au Bénin à Dakou
        </Typography>

        <form noValidate>

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
            <Typography style={{textAlign:"left",fontSize:"14px", color:"white", marginTop: "50px", textTransform: "uppercase"}}>
            Description de la problématique</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}

    />
            </Grid>
            <Grid container spacing={2}></Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase"}}>
            Solution au problème</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
    />
            </Grid>
            <Grid container spacing={2}></Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase", marginBottom:"50px"}}>
            Images - vidéos - audios</Typography>

            <Typography component="h1" variant="h5" style={{ color: "#672f4e", textAlign:"center",fontSize:"20px", textTransform: "uppercase", margin: "30px"}}>
            comment nous aider</Typography>
          
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase", marginTop: "20px"}}>
            sur place</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase"}}>
            depuis chez vous</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
    />
            </Grid>

            </Grid>
            
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase"}}>
            contact</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase"}}>
            evénement</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
    />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5" style={{textAlign:"left",fontSize:"14px", color:"white", textTransform: "uppercase"}}>
            remerciements</Typography>
        <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      style={{width:"90vw", height:"12vh", border: "solid 3px", borderColor: "#672f4e", borderRadius:"25px 25px 0px 25px", backgroundColor: "whitesmoke" , padding: "8px", fontSize: "small", fontVariant: "normal", letterSpacing: "0",    color: "grey", fontStyle: "italic", marginTop:"5px", padding:"8px"}}
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

export default PagePresentationProjet;