import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { withStyles, Button, Tab, Tabs} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';


import Header from '../../common/header/Header';
import '../checkout/Checkout.css'

const styles = (theme => ({

    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    tab: {
        "font-weight": 500,
    },


}))

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

class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            activeStep: 0,
            steps: this.getSteps(),
            value:0,

        }
    }
    getSteps = () => {
        return ['Delivery', 'Payment'];
    }
    nextButtonClickHandler = () => {
        let activeStep = this.state.activeStep;
        activeStep++;
        this.setState({
            ...this.state,
            activeStep: activeStep,
        });
    }

    backButtonClickHandler = () => {
        let activeStep = this.state.activeStep;
        activeStep--;
        this.setState({
            ...this.state,
            activeStep: activeStep,
        });
    }

    changeButtonClickHandler = () => {
        this.setState({
            ...this.state,
            activeStep: 0,
        });
    }

    tabsChangeHandler = (event, value) => {
        this.setState({
            value,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header baseUrl={this.props.baseUrl} showHeaderSearchBox={false} />
                <div className="flex-container">
                    <div className="stepper-container">
                        <Stepper activeStep={this.state.activeStep} orientation="vertical">
                            {this.state.steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Tabs className="address-tabs" value={this.state.value} onChange={this.tabsChangeHandler}>
                                            <Tab label="EXISTING ADDRESS" className={classes.tab} />
                                            <Tab label="NEW ADDRESS" className={classes.tab} />
                                        </Tabs>
                                        {this.state.value === 0 &&
                                        <TabContainer>
                                            hello
                                        </TabContainer>
                                        }
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={this.state.activeStep === 0}
                                                    onClick={this.backButtonClickHandler}
                                                    className={classes.Button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.nextButtonClickHandler}
                                                    className={classes.button}
                                                >
                                                    {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {this.state.activeStep === this.state.steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography>View the summary and place your order now!</Typography>
                                <Button onClick={this.changeButtonClickHandler} className={classes.button}>
                                    Change
                             </Button>
                            </Paper>
                        )}

                    </div>
                </div>


            </div>
        )
    }
}

export default withStyles(styles)(Checkout);