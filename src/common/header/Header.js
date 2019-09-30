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
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import { MenuList } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';



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
    formButton: {
        "font-weight": 400,
    },
    tab: {
        "font-weight": 400,
    },
    formControl: {
        "width": "80%",
    },
    profileButton: {
        color: "#c2c2c2",
        "text-transform": "none",
        "font-weight": 400,
    },
    menuItems: {  //Style for the menu items 
        "text-decoration": "none",
        "color": "black",
        "text-decoration-underline": "none",
        "padding-top":"0px",
        "padding-bottom":"0px",
    },
    menuList: { //Styling for the menulist component
        padding: "0px"
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
            menuIsOpen: false,
            value: 0,
            loginContactNo: "",
            loginContactNoRequired: "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",
            firstName: "bharath",
            firstNameRequired: "dispNone",
            lastName: "",
            email: "",
            emailRequired: "dispNone",
            invalidEmail: "dispNone",
            signUpPassword: "",
            signUpPasswordRequired: "dispNone",
            signUpContactNo: "",
            signUpContactNoRequired: "dispNone",
            inValidLoginContact: "dispNone",
            invalidPassword: "dispNone",
            notRegisteredContact: "dispNone",
            validPasswordHelpText: "dispNone",
            contactNoRegistered: "dispNone",
            contactHelpText: "dispNone",
            snackBarOpen: false,
            snackBarMessage: "",
            transition: Fade,
            loggedIn: false,

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
            isModalOpen: true,
            loginContactNo: "",
            loginContactNoRequired: "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",
            firstName: "",
            firstNameRequired: "dispNone",
            lastName: "",
            email: "",
            emailRequired: "dispNone",
            invalidEmail: "dispNone",
            signUpPassword: "",
            signUpPasswordRequired: "dispNone",
            signUpContactNo: "",
            signUpContactNoRequired: "dispNone",
            inValidLoginContact: "dispNone",
            invalidPassword: "dispNone",
            notRegisteredContact: "dispNone",
            validPasswordHelpText: "dispNone",
            contactNoRegistered: "dispNone",
            contactHelpText: "dispNone",
        })
    }

    closeModalHandler = () => {
        this.setState({
            ...this.state,
            isModalOpen: false
        })
    }

    openMenu = () => this.setState({
        ...this.state,
        menuIsOpen: !this.state.menuIsOpen
    })

    profileButtonClickHandler = (event) => {
        this.state.anchorEl ? this.setState({ anchorEl: null }) : this.setState({ anchorEl: event.currentTarget });
        this.openMenu();
    };


    inputLoginContactNoChangeHandler = (event) => {
        this.setState({
            ...this.state,
            loginContactNo: event.target.value,
        })
    }

    inputLoginPasswordChangeHandler = (event) => {
        this.setState({
            ...this.state,
            loginPassword: event.target.value,
        })
    }

    inputFirstNameChangeHandler = (event) => {
        this.setState({
            ...this.state,
            firstName: event.target.value,
        })
    }
    inputLastNameChangeHandler = (event) => {
        this.setState({
            ...this.state,
            lastName: event.target.value,
        })
    }
    inputEmailChangeHandler = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value,
        })
    }
    inputSignUpPasswordChangeHandler = (event) => {
        this.setState({
            ...this.state,
            signUpPassword: event.target.value,
        })
    }
    inputSignUpContactNoChangeHandler = (event) => {
        this.setState({
            ...this.state,
            signUpContactNo: event.target.value,
        })
    }

    tabsChangeHandler = (event, value) => {
        this.setState({
            value
        });
    }

    loginClickHandler = () => {
        if (this.handleLoginFormValidation()) {
            let dataLogin = null;
            let xhrLogin = new XMLHttpRequest();
            let that = this;
            xhrLogin.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    if (xhrLogin.status === 200) {
                        let loginResponse = JSON.parse(this.responseText);
                        sessionStorage.setItem("uuid", JSON.parse(this.responseText).id);
                        sessionStorage.setItem("access-token", xhrLogin.getResponseHeader("access-token"));
                        that.setState({
                            ...that.state,
                            loggedIn: true,
                            firstName: loginResponse.first_name,
                            snackBarMessage: "Logged in successfully!",
                            snackBarOpen: true,
                        })
                        that.closeModalHandler();
                    } else if (xhrLogin.status === 401) {
                        let loginResponse = JSON.parse(this.responseText);
                        let notRegisteredContact = "dispNone"
                        let invalidPassword = "dispNone"
                        if (loginResponse.code === 'ATH-001') {
                            notRegisteredContact = "dispBlock"
                        }
                        if (loginResponse.code === 'ATH-002') {
                            invalidPassword = "dispBlock"
                        }
                        that.setState({
                            ...that.state,
                            notRegisteredContact: notRegisteredContact,
                            invalidPassword: invalidPassword,
                        })
                    }
                }
            })
            xhrLogin.open("POST", this.props.baseUrl + "customer/login");
            xhrLogin.setRequestHeader("Authorization", "Basic " + window.btoa(this.state.loginContactNo + ":" + this.state.loginPassword));
            xhrLogin.setRequestHeader("Content-Type", "application/json");
            xhrLogin.setRequestHeader("Cache-Control", "no-cache");
            xhrLogin.send(dataLogin);
        }

    }

    handleLoginFormValidation = () => {
        let loginContactNoRequired = "dispNone";
        let loginPasswordRequired = "dispNone";
        let inValidLoginContact = "dispNone";
        let isFormValid = true;
        if (this.state.loginContactNo === "") {
            loginContactNoRequired = "dispBlock";
            isFormValid = false;
        }
        if (this.state.loginPassword === "") {
            loginPasswordRequired = "dispBlock"
            isFormValid = false;
        }
        if (this.state.loginContactNo !== "") {
            var contactNo = "[7-9][0-9]{9}";
            if (!this.state.loginContactNo.match(contactNo)) {
                inValidLoginContact = "dispBlock"
                isFormValid = false;
            }
        }
        this.setState({
            loginContactNoRequired: loginContactNoRequired,
            loginPasswordRequired: loginPasswordRequired,
            inValidLoginContact: inValidLoginContact
        })
        return (isFormValid);
    }

    signUpClickHandler = () => {
        if (this.signUpFormValidation()) {
            let dataSignUp = JSON.stringify({
                "contact_number": this.state.signUpContactNo,
                "email_address": this.state.email,
                "first_name": this.state.firstName,
                "last_name": this.state.lastName,
                "password": this.state.signUpPassword
            });

            let xhrSignUp = new XMLHttpRequest();
            let that = this;
            xhrSignUp.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    if (xhrSignUp.status === 201) {
                        that.setState({
                            ...that.state,
                            value: 0,
                            snackBarMessage: "Registered successfully! Please login now!",
                            snackBarOpen: true,
                        })
                    }
                    if (xhrSignUp.status === 400) {
                        let responseData = JSON.parse(this.responseText)
                        if (responseData.code === 'SGR-001') {
                            that.setState({
                                ...that.state,
                                contactNoRegistered: "dispBlock"
                            })
                        }
                    }
                }
            });
            xhrSignUp.open("POST", this.props.baseUrl + "customer/signup");
            xhrSignUp.setRequestHeader("Content-Type", "application/json");
            xhrSignUp.setRequestHeader("Cache-Control", "no-cache");
            xhrSignUp.send(dataSignUp);
        }
    }

    signUpFormValidation = () => {
        let firstNameRequired = "dispNone";
        let emailRequired = "dispNone";
        let signUpPasswordRequired = "dispNone";
        let signUpContactNoRequired = "dispNone";
        let validPasswordHelpText = "dispNone";
        let contactHelpText = "dispNone";
        let invalidEmail = "dispNone";
        let signUpFormValid = true;

        if (this.state.firstName === "") {
            firstNameRequired = "dispBlock";
            signUpFormValid = false;
        }
        if (this.state.email === "") {
            emailRequired = "dispBlock";
            signUpFormValid = false;
        }
        if (this.state.email !== "") {

            if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w+)+$/.test(this.state.email))) {
                invalidEmail = "dispBlock"
                signUpFormValid = false;
            }
        }
        if (this.state.signUpContactNo === "") {
            signUpContactNoRequired = "dispBlock";
            signUpFormValid = false;
        }
        if (this.state.signUpContactNo !== "") {
            var contactNo = "[7-9][0-9]{9}";
            if (!this.state.signUpContactNo.match(contactNo)) {
                contactHelpText = "dispBlock"
                signUpFormValid = false;
            }
        }
        if (this.state.signUpPassword === "") {
            signUpPasswordRequired = "dispBlock";
            signUpFormValid = false;
        }
        if (this.state.signUpPassword !== "") {
            if (!this.isValidPassword(this.state.signUpPassword)) {
                validPasswordHelpText = "dispBlock"
                signUpFormValid = false;

            }
        }
        this.setState({
            firstNameRequired: firstNameRequired,
            emailRequired: emailRequired,
            contactHelpText: contactHelpText,
            signUpPasswordRequired: signUpPasswordRequired,
            signUpContactNoRequired: signUpContactNoRequired,
            invalidEmail: invalidEmail,
            validPasswordHelpText: validPasswordHelpText,
        })
        return (signUpFormValid);

    }

    isValidPassword = (password) => {
        let lowerCase = false;
        let upperCase = false;
        let number = false;
        let specialCharacter = false;


        if (password.length < 8) {
            return false;
        }

        if (password.match("(?=.*[0-9]).*")) {
            number = true;
        }

        if (password.match("(?=.*[a-z]).*")) {
            lowerCase = true;
        }
        if (password.match("(?=.*[A-Z]).*")) {
            upperCase = true;
        }
        if (password.match("(?=.*[#@$%&*!^]).*")) {
            specialCharacter = true;
        }

        if (lowerCase && upperCase) {
            if (specialCharacter && number) {
                return true;
            }
        } else {
            return false;
        }
        return false;
    }

    snackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            ...this.state,
            snackBarMessage: "",
            snackBarOpen: false,
        })
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
                    {this.state.loggedIn !== true ?
                        <Button className={classes.loginButton} size="large" variant="contained" onClick={this.loginButtonClickHandler}>
                            <AccountCircle className="login-button-icon" />
                            LOGIN
                        </Button>
                        : <Button className={classes.profileButton} size="large" variant="text" onClick={this.profileButtonClickHandler}>
                            <AccountCircle className="profile-button-icon" htmlColor="#c2c2c2" />
                            {this.state.firstName}
                        </Button>
                    }
                    <Menu id="profile-menu" anchorEl={this.state.anchorEl} open={this.state.menuIsOpen} onClose={this.profileButtonClickHandler}>
                        <MenuList className={classes.menuList}>
                            <Link to={"/profile"} className={classes.menuItems} underline="none" color={"default"}>
                                <MenuItem className={classes.menuItems} onClick={this.onMyProfileClicked} disableGutters={false}>My profile</MenuItem>
                            </Link>
                            <MenuItem className="menu-items" onClick={this.onLogOutClicked}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </header>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.isModalOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <Tabs className="login-modal-tabs" value={this.state.value} onChange={this.tabsChangeHandler}>
                        <Tab label="LOGIN" className={classes.tab} />
                        <Tab label="SIGNUP" className={classes.tab} />
                    </Tabs>

                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="login-contact-no">Contact No.</InputLabel>
                                <Input id="login-contact-no" className="input-fields" fullWidth={true} type="text" logincontactno={this.state.loginContactNo} onChange={this.inputLoginContactNoChangeHandler} value={this.state.loginContactNo} />
                                <FormHelperText className={this.state.loginContactNoRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.inValidLoginContact}>
                                    <span className="red">Invalid Contact</span>
                                </FormHelperText>

                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="login-password">Password</InputLabel>
                                <Input id="login-password" className="input-fields" type="password" loginpassword={this.state.loginPassword} fullWidth={true} onChange={this.inputLoginPasswordChangeHandler} value={this.state.loginPassword} />
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
                            <br />
                            <br />
                            <br />
                            <Button variant="contained" className={classes.formButton} color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="first-name">First Name</InputLabel>
                                <Input id="first-name" className="input-fields" firstname={this.state.firstName} fullWidth={true} onChange={this.inputFirstNameChangeHandler} value={this.state.firstName} />
                                <FormHelperText className={this.state.firstNameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="last-name">Last Name</InputLabel>
                                <Input id="last-name" className="input-fields" lastname={this.state.lastName} fullWidth={true} onChange={this.inputLastNameChangeHandler} value={this.state.lastName} />
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" className="input-fields" type="email" email={this.state.email} fullWidth={true} onChange={this.inputEmailChangeHandler} value={this.state.email} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.invalidEmail}>
                                    <span className="red">Invalid Email</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="sign-up-password">Password</InputLabel>
                                <Input id="sign-up-password" className="input-fields" type="password" signuppassword={this.state.signUpPassword} fullWidth={true} onChange={this.inputSignUpPasswordChangeHandler} value={this.state.signUpPassword} />
                                <FormHelperText className={this.state.signUpPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.validPasswordHelpText}>
                                    <span className="red">Password must contain at least one capital letter, one small letter, one number, and one special character</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="sign-up-contactNo">Contact No.</InputLabel>
                                <Input id="sign-up-contactNo" className="input-fields" signupcontactno={this.state.signUpContactNo} fullWidth={true} onChange={this.inputSignUpContactNoChangeHandler} value={this.state.signUpContactNo} />
                                <FormHelperText className={this.state.signUpContactNoRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.contactHelpText}>
                                    <span className="red">Contact No. must contain only numbers and must be 10 digits long</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.contactNoRegistered}>
                                    <span className="red">This contact number is already registered! Try other contact number.</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <br />
                            <Button variant="contained" className={classes.formButton} color="primary" onClick={this.signUpClickHandler}>SIGNUP</Button>
                        </TabContainer>
                    }
                </Modal>
                <div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snackBarOpen}
                        autoHideDuration={4000}
                        onClose={this.snackBarClose}
                        TransitionComponent={this.state.transition}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.snackBarMessage}</span>}
                    />
                </div>

            </div>

        )
    }



}

export default withStyles(styles)(Header);  