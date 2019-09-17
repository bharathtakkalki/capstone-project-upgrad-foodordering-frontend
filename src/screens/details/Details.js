import React, { Component } from 'react';
import Header from '../../common/header/Header';
import { classes } from 'istanbul-lib-coverage';







class Details extends Component{
    render(){
        return(
            <div>
                <Header baseUrl={this.props.baseUrl} showHeaderSearchBox = {false}></Header>
                <h1>This is Details Page</h1>
            </div>
        )
    }
}

export default Details;