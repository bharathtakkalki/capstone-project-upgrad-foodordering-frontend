import React, { Component } from 'react';
import Header from '../../common/header/Header';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid';
import'@fortawesome/fontawesome-svg-core';
import GridList from '@material-ui/core/GridList';


import './Home.css';

const styles = (theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },

    grid: { //style for the grid component 
        "padding": "20px",
        "margin-left": "0.5%",
        "margin-right": "0.5%",
        width:"100%",
        transform: 'translateZ(0)',
        cursor: 'pointer',
    },

    media: { // style for the image in the card
        height: 150,
        width: "100%",
        // paddingTop: '56.25%', // 16:9
    },

    title:{
        "font-size":"25px",
        // '@media (min-width: 960px)':{
        //     "font-size":"50px",
        // }
    },

    cardContent:{
        "padding":"10px",
        "margin-left":"20px",
        "margin-right":"20px",
    }
  
    

}))


class Home extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>

                <Header baseUrl={this.props.baseUrl}></Header>
                <div className="flex-container">
                    <Grid container spacing={3} wrap="wrap" alignContent="center" className={classes.grid}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardActionArea className="card-action-area">
                                    <CardMedia
                                        className={classes.media}
                                        image="https://b.zmtcdn.com/data/res_imagery/42597_RESTAURANT_obp1.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className={classes.title} variant="h5" component="h2">
                                            Rike-TerraceBar & Grill
                                         </Typography>
                                    </CardContent>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography variant="subtitle1" component="p">
                                            Chinese, Continental, Drinks, Indian, Snacks
                                         </Typography>
                                    </CardContent>
                                    <CardContent className = {classes.cardContent}>
                                         <div className="card-bottom-info">
                                             <span className="rest-rating">
                                             <span>
                                                <FontAwesomeIcon icon="star" size="lg" color="white"/>
                                             </span>
                                             <Typography variant="caption" component="p" >4.9</Typography>
                                             <Typography variant="caption" component="p" >(200)</Typography>
                                            </span>
                                            <span className="rest-for-two"> 
                                                <Typography variant="caption" component="p">
                                                    <FontAwesomeIcon icon="rupee-sign" />
                                                    3000
                                                </Typography>
                                                <Typography variant="caption" component="p">for two</Typography>
                                            </span>
                                         </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        </Grid>
                    </div>
                </div>
                )
            }
        }
        
export default withStyles(styles)(Home);