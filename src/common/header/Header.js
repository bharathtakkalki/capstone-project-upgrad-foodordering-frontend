import React, { Component } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';


import './Header.css';
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core';

const styles = (theme => ({
    searchText: {
        'color': 'white',
        '&:after': {
            borderBottom: '2px solid white',
        }
    },
    loginButton: {
        "font-weight": 400,
    },

}))
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}




class Header extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0,
            contactNo: "",
            contactNoRequired: "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",


        }

    }

    closeModalHandler = () => {
        this.setState({
            ...this.state,
            isModalOpen: false
        })
    }

    loginButtonClickHandler = () => {
        this.setState({
            ...this.state,
            isModalOpen: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            ...this.state,
            isModalOpen: false
        })
    }

    inputContactNoChangeHandler = (event) => {
        this.setState({
            ...this.state,
            contactNo:event.target.value,
        })
    }

    inputPasswordChangeHandler = (event) => {
        this.setState({
            ...this.state,
            loginPassword:event.target.value,
        })
    }

    tabChangeHandler = (event, value) => {
        this.setState({ 
            value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <header className="app-header">
                    <FastfoodIcon className="app-logo" fontSize="large" htmlColor="white" />
                    <span className="header-searchbox">
                        <Input className={classes.searchText}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon id="search-icon" htmlColor="white"></SearchIcon>
                                </InputAdornment>
                            }
                            fullWidth={true} placeholder="Search by Restaurant Name" />
                    </span>
                    <Button className={classes.loginButton} size="large" variant="contained" onClick={this.loginButtonClickHandler}>
                        <AccountCircle className="login-button-icon" />
                        LOGIN
                </Button>
                </header>
                <Modal
                    ariaHideApp={false}
                    ariaHideApp={false}
                    isOpen={this.state.isModalOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <Tabs className="login-modal-tabs" value={this.state.value} onChange={this.tabsChangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="SIGNUP" />
                    </Tabs>

                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="contact-no">Contact No.</InputLabel>
                                <Input id="contact-no" className = "input-fields" type="text" contactNo={this.state.contactNo} onChange={this.inputContactNoChangeHandler}/>
                                <FormHelperText className={this.state.contactNoRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="login-password">Password</InputLabel>
                                <Input id="login-password" className = "input-fields" type="password" loginPassword={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer> 
                    }
                </Modal>



            </div>

        )
    }



}

export default withStyles(styles)(Header);  