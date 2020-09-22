import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LandingPage from './component/views/LandingPage/LandingPage'
import LoginPage from './component/views/LoginPage/LoginPage'
import SingupPage from './component/views/SingupPage/SingupPage'

export default memo(() => {

    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <LandingPage></LandingPage>
            </Route>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>
            <Route path="/singup">
                <SingupPage></SingupPage>
            </Route>
        </Switch>
    </Router>
    )

});

// export { originalName as alias } from 'module' (exa)