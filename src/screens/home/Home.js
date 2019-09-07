import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import './Home.css';

const styles = (theme => ({


    grid: { //style for the grid component 
        "padding-top":"20px",
        "margin-left": "0.5%",
        "margin-right": "0.5%",
    },




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
                            <Paper className="paper">xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className="paper">xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className="paper">xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className="paper">xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                    Food Ordering app.
                </div>
            </div>
        )




    }


}

export default withStyles(styles) (Home);