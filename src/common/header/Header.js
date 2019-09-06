import React,{Component} from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import{withStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';


import './Header.css';

const styles = (theme => ({
    searchText:{
        'color':'white',
        '&:after':{
            borderBottom:'2px solid white',
        }
    },
    loginButton:{
        "font-weight": 400,
    },

}))





class Header extends Component{

    render(){
        const {classes} = this.props;
        return(
            <header className = "app-header">
                <FastfoodIcon className="app-logo" fontSize="large" htmlColor="white"/>
                <span className="header-searchbox">
                        <Input className={classes.searchText}
                             startAdornment={
                                <InputAdornment position="start">
                                <SearchIcon id="search-icon" htmlColor = "white"></SearchIcon>
                                </InputAdornment>
                            }
                            fullWidth= {true} placeholder="Search by Restaurant Name"  />
                </span>
                <Button className={classes.loginButton} size="large" variant="contained">
                    <AccountCircle className ="login-button-icon"/>
                    LOGIN
                </Button>


            </header>



        )
    }



}

export default withStyles(styles)(Header);