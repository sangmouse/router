import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router,Switch, Route, Link, useParams } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import routes from './routes'


// const  Child = () => {
//     const {id} = useParams()
//         return (
//             <p>Id : {id}</p>
//         )
// }

class App extends Component {

    showContentMenus = (routes) => {
        var result = null
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route key ={index} exact = {route.exact} path = {route.path} component = {route.main}/>
                )
            })
        }
        return result
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/* menu */}
                    <Menu />
                    {/* content */}
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
