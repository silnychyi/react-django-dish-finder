import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import Restaurants from './Restaurants'
import Restaurant from './Restaurant'
import Meals from './Meals'
import Header from './layout/Header';
import { Provider, Consumer } from '../context'


class App extends Component {
    render(){
        return(
            <Provider>
                <Router>
                    <div className="App">
                        <Consumer>
                            {value=>{
                                return(
                                    <Fragment>
                                        <Header />
                                        <Route exact path="/" render={() => (
                                            value.keyword !== "" ? (
                                                <Redirect to="/meals"/>
                                            ) : (
                                                <Home/>
                                            )
                                        )}/>
                                        <Route path="/restaurant/:id" render={(props)=>{
                                            return <Restaurant {...props} dispatch={value.dispatch}/>
                                        }}/>
                                        <Route exact path="/meals" component={Meals} />
                                    </Fragment>
                                )
                            }}
                        </Consumer>
                    </div>
                </Router>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))

