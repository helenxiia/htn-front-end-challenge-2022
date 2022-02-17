import { React, Component } from "react";
import axios from 'axios';
import useStyles from './styles';
import { withStyles } from "@material-ui/styles";

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, makeStyles} from '@material-ui/core';

class EventList extends Component {
    constructor(props){
        super(props);

        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('https://api.hackthenorth.com/v3/events')
        .then(response => {
            console.log(response);
            this.setState({
                events: response.data.sort(function(d1,d2){
                    return d1.start_time < d2.start_time ? -1 : d1.start_time > d2.start_time ? 1 : 0;
                })})
        })
        .catch(error=> {
            console.log(error);
        })
    }
    render() {
        const { events } = this.state
        const { classes } = this.props
        console.log(events[0]?.speakers[0]?.profile_pic)
        return (
            <div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {
                        events.map((event)=>(
                            <Grid item key={event.id} xs={12} sm={6} md={4}>

                            <Card className={classes.event}>
                                <CardMedia 
                                component='img'
                                height="194"
                                image={event.speakers[0] && event.speakers[0].profile_pic ? event.speakers[0].profile_pic : 'https://imgur.com/SZFa3wf.png'}
                                title="image title"
                                />

                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        {event.name} 
                                    </Typography>
                                    <Typography paragraph>
                                        {event.description}
                                    </Typography>
                                    <Typography variant="h8">
                                        { new Date(event.start_time).toString()}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        More Information
                                    </Button>
                                    <Button size="small" color="primary">
                                        Register
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withStyles(useStyles) (EventList);