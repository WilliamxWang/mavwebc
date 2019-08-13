import React from 'react';
import Nav from './components/nav';
import Albums from './components/albums';
import Photos from './components/photos';
import Users from './components/users';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/users" exact component ={Users}/>
                <Route path="/albums" exact component ={Notlogged}/>
                <Route path="/photos" exact component ={Notlogged}/>
                <Route path="/albums/:id"  component ={Albums}/>
                <Route path="/photos/:id/:id" component ={Photos}/>
                </Switch>
            </div>
        </Router>
    );
}
const Home = ()=>
    (
        <div>
            <h1>Mav back End Challenge, please click on Users and pick one to log in</h1>
        </div>
    )

const Notlogged = ()=>
    (
        <div>
            <h1>You have not logged in yet, please click on Users and pick one user as log in</h1>
        </div>
    )
export default App;
