import React from "react";
import { useState } from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, makeStyles} from '@material-ui/core';
import EventIcon from '@mui/icons-material/Event';
import useStyles from './styles';
import { ClassNames } from "@emotion/react";
import EventList from './getEvents';

const cards = [1,2,3,4,5,6,7,8,9];


const App = App => {
    
    const [isPrivate, setPrivate] = useState(false);
 

    var login;
    
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventIcon className={classes.icon}/>
                    <Typography variant="h6"> 
                    Hack the North Events
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth ="sm" style={{marginTop: '20px'}}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom> 
                        Upcoming Events
                        </Typography>
                        <Typography variant='h5' align ="center" color="textSecondary" paragraph>
                        Hello everyone, these are the upcoming events for Hack the North. Please take a look and see if you are interested in anything.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing ={2} justify="center">
                                <Grid item>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => { 
                                        //setPrivate(isPrivate => !isPrivate);
                                    }}
                                        variant="outlined" color="primary">
                                        {isPrivate ? "See All Events" : "See Private Events"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <EventList/>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose
                </Typography>

            </footer>
        </>
    )
}
export default App;