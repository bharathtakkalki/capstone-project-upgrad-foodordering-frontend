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
    formButton:{
        "font-weight": 400,
    },
    tab:{
        "font-weight": 400,
    },
    formControl:{
        "width":"80%",
    }

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
        <Typography component="div" style={{ padding: '0px', textAlign: 'center' }}>
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
            loginContactNo: "",
            loginContactNoRequired: "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",
            firstName:"",
            firstNameRequired:"dispNone",
            lastName:"",
            email:"",
            emailRequired:"dispNone",
            signUpPassword:"",
            signUpPasswordRequired:"dispNone",
            signUpContactNo:"",
            signUpContactNoRequired:"dispNone",
            inValidContact:"dispNone",
            invalidPassword:"dispNone",
            notRegisteredContact:"dispNone",
            validPasswordHelpText:"dispNone",
            contactNoRegistered:"dispNone",
            contactHelpText:"dispNone",

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

    inputLoginContactNoChangeHandler = (event) => {
        this.setState({
            ...this.state,
            loginContactNo:event.target.value,
        })
    }

    inputLoginPasswordChangeHandler = (event) => {
        this.setState({
            ...this.state,
            loginPassword:event.target.value,
        })
    }

    inputFirstNameChangeHandler = (event) => {
        this.setState({
            ...this.state,
            firstName:event.target.value,
        })
    }
    inputLastNameChangeHandler = (event) => {
        this.setState({
            ...this.state,
            lastName:event.target.value,
        })
    }
    inputEmailChangeHandler = (event) => {
        this.setState({
            ...this.state,
            email:event.target.value,
        })
    }
    inputSignUpPasswordChangeHandler = (event) => {
        this.setState({
            ...this.state,
            signUpPassword:event.target.value,
        })
    }
    inputSignUpContactNoChangeHandler = (event) => {
        this.setState({
            ...this.state,
            signUpContactNo:event.target.value,
        })
    }

    tabsChangeHandler = (event, value) => {
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
                    isOpen={this.state.isModalOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <Tabs className="login-modal-tabs" value={this.state.value} onChange={this.tabsChangeHandler}>
                        <Tab label="LOGIN" className= {classes.tab}/>
                        <Tab label="SIGNUP" className= {classes.tab}/>
                    </Tabs>

                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="login-contact-no">Contact No.</InputLabel>
                                <Input id="login-contact-no" className = "input-fields" fullWidth={true} type="text" logincontactno={this.state.loginContactNo} onChange={this.inputLoginContactNoChangeHandler}/>
                                <FormHelperText className={this.state.loginContactNoRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.inValidContact}>
                                    <span className="red">Invalid Contact</span>
                                </FormHelperText>

                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="login-password">Password</InputLabel>
                                <Input id="login-password" className = "input-fields" type="password" loginpassword={this.state.loginPassword} fullWidth={true} onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.invalidPassword}>
                                    <span className="red">Invalid Credentials</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.notRegisteredContact}>
                                    <span className="red">This contact number has not been registered!</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <br/>
                            <Button variant="contained" className = {classes.formButton} color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer> 
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="first-name">First Name</InputLabel>
                                <Input id ="first-name" className="input-fields" firstname={this.state.firstName} fullWidth={true} onChange = {this.inputFirstNameChangeHandler}/>
                                <FormHelperText className={this.state.firstNameRequired}>
                                    <span className = "red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="last-name">Last Name</InputLabel>
                                <Input id ="last-name" className="input-fields" lastname={this.state.lastName} fullWidth={true} onChange = {this.inputLastNameChangeHandler}/>
                            </FormControl>
                            <br/>
                            <br/>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id ="email" className="input-fields" type="email" email={this.state.email} fullWidth={true} onChange = {this.inputEmailChangeHandler}/>
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className = "red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="sign-up-password">Password</InputLabel>
                                <Input id ="sign-up-password" className="input-fields" signuppassword={this.state.signUpPassword} fullWidth={true} onChange = {this.inputSignUpPasswordChangeHandler}/>
                                <FormHelperText className={this.state.signUpPasswordRequired}>
                                    <span className = "red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.validPasswordHelpText}>
                                    <span className="red">Password must contain at least one capital letter, one small letter, one number, and one special character</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="sign-up-contactNo">Contact No.</InputLabel>
                                <Input id ="sign-up-contactNo" className="input-fields" signupcontactno={this.state.signUpContactNo} fullWidth={true} onChange = {this.inputSignUpContactNoChangeHandler}/>
                                <FormHelperText className={this.state.signUpContactNoRequired}>
                                    <span className = "red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.contactHelpText}>
                                    <span className="red">Contact No. must contain only numbers and must be 10 digits long</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.contactNoRegistered}>
                                    <span className="red">This contact number is already registered! Try other contact number.</span>
                                </FormHelperText>
                            </FormControl>
                            <br/>
                            <br/>
                            <br/>
                            <Button variant="contained" className ={classes.formButton}color="primary" onClick={this.signUpClickHandler}>SIGNUP</Button>
                        </TabContainer>

                    }
                </Modal>



            </div>

        )
    }



}

export default withStyles(styles)(Header);  