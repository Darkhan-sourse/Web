import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    return (
        <div className="container">

            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users" exact component={Users} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App