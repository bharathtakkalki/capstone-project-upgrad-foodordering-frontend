import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home/Home';




class Controller extends Component{

    render(){
        return(
            <Router>
                <div className = 'main-conatiner'>
                    <Route exact path = '/' render={(props) => <Home {...props} />}/>
                </div>
            </Router>

        )
    }

}

export default Controller;