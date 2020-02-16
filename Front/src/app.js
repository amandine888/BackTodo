import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home'; 
import Firstpage from './components/Firstpage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Firstpage} />
                    <Route path="/Home" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
