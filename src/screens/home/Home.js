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
        transform: 'translateZ(0)',
        cursor: 'pointer',
    },

    gridCard:{
        '@media (min-width: 1200px)':{
            'flex-grow': '0',
            'max-width': '25%',
            'flex-basis': '25%',
        },
        '@media (min-width: 960px) and (max-width:1200px)':{
            'flex-grow': '0',
            'max-width': '33%',
            'flex-basis': '33%',
        },
    },

    card:{
        height:"400px",
        '@media (min-width: 1200px)':{
            height:"500px",
        },
        '@media (min-width: 960px) and (max-width:1200px)':{
            height:"400px",
        }
    },

    media: { // style for the image in the card
        height: "40%",
        width: "100%",
        // paddingTop: '56.25%', // 16:9
    },

    title:{
        "font-size":"25px",
        '@media (min-width: 1200px)':{
            "font-size":"40px",
        }
    },

    cardContent:{
        "padding":"10px",
        "margin-left":"20px",
        "margin-right":"20px",
        "height":"20%",
        "display":"flex",
        "align-items":"center",
    },
    cardActionArea:{
        "display": "flex",
        "height": "100%",
        "flex-direction": "column",
        "align-items": "normal",
        "justify-content": "space-between",

    }
  
    

}))


class Home extends Component {
    constructor(){
        super()
        this.state = {
            restaurant:[],
        }
    }

    componentDidMount(){
        let data = null;
        let xhrRestaurant = new XMLHttpRequest();
        let that = this;
        xhrRestaurant.addEventListener("readystatechange",function(){
            if(xhrRestaurant.readyState === 4 && xhrRestaurant.status === 200){
                let restaurant = JSON.parse(xhrRestaurant.responseText)
                console.log(restaurant.restaurants)
                that.setState({
                    restaurant:restaurant.restaurants
                });
            }
        })
        xhrRestaurant.open("GET",this.props.baseUrl+"restaurant")
        xhrRestaurant.send(data)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                <Header baseUrl={this.props.baseUrl}></Header>
                <div className="flex-container">
                    <Grid container spacing={3} wrap="wrap" alignContent="center" className={classes.grid}>
                        {this.state.restaurant.map(restaurant => (
                        <Grid key={restaurant.id} item xs={12} sm={6} md={3} className={classes.gridCard}>
                            <Card className={classes.card}>
                                <CardActionArea className={classes.cardActionArea}>
                                    <CardMedia
                                        className={classes.media}
                                        image={restaurant.photo_URL}
                                        title={restaurant.restaurant_name}
                                    />
                                    <CardContent className = {classes.cardContent}>
                                        <Typography className={classes.title} variant="h5" component="h2">
                                            {restaurant.restaurant_name}
                                         </Typography>
                                    </CardContent>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography variant="subtitle1" component="p">
                                            {restaurant.categories}
                                         </Typography>
                                    </CardContent>
                                    <CardContent className = {classes.cardContent}>
                                         <div className="card-bottom-info">
                                             <span className="rest-rating">
                                             <span>
                                                <FontAwesomeIcon icon="star" size="lg" color="white"/>
                                             </span>
                                             <Typography variant="caption" component="p" >{restaurant.customer_rating}</Typography>
                                             <Typography variant="caption" component="p" >({restaurant.number_customers_rated})</Typography>
                                            </span>
                                            <span className="rest-for-two"> 
                                                <Typography variant="caption" component="p">
                                                    <FontAwesomeIcon icon="rupee-sign" />
                                                    {restaurant.average_price}
                                                </Typography>
                                                <Typography variant="caption" component="p">for two</Typography>
                                            </span>
                                         </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        ))}
                        </Grid>
                    </div>
                </div>
                )
            }
        }
        
export default withStyles(styles)(Home);