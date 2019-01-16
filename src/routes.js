//Dependences
import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
// Components
import App from './App'
import {Home, Load} from './components/patterns/patterns'

class AppRoutes extends Component {
    render() {
        return (
            <App>
                <HashRouter>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/algorithms/:id'} component={Home}/>
                        <Route exact path={'/algorithms/:id/:key'} component={Home}/>
                        <Route exact path={'/algorithms/:id/:key/:inFto'} component={Home}/>

                        {/*<Route exact path={'/'} component={Load}/>*/}
                        {/*<Route exact path={'/home'} component={Home}/>*/}
                    </Switch>
                </HashRouter>
            </App>
        );
    }
}

export default AppRoutes