import React,{Component} from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood'

import './Header.css';






class Header extends Component{

    render(){
        return(
            <header className = "app-header">
                <FastfoodIcon fontSize="large" htmlColor="white"/>

            </header>



        )
    }



}

export default Header;