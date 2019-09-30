import React,{Component} from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import{withStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

import './Header.css';

const styles = (theme => ({
    searchText:{
        'color':'white',
        '&:after':{
            borderBottom:'2px solid white',
        }
    }

}))





class Header extends Component{

    render(){
        const {classes} = this.props;
        return(
            <header className = "app-header">
                <FastfoodIcon fontSize="large" htmlColor="white"/>
                <span className="header-searchbox">
                        <Input className={classes.searchText}
                             startAdornment={
                                <InputAdornment position="start">
                                <SearchIcon id="search-icon" htmlColor = "white"></SearchIcon>
                                </InputAdornment>
                            }
                            fullWidth= {true} placeholder="Search by Restaurant Name"  />
                </span>


            </header>



        )
    }



}

export default withStyles(styles)(Header);