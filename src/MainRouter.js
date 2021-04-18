

import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import HomeOne from './pages/HomeOne'
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export default function MainRouter() {

    return (
        
        <div>
            <Switch>
                <Route exact path="/" component={HomeOne} />
                <Route exact path={"/register"} component={Contact} />
                <Route exact component={Error404} />
            </Switch>
        </div>
    )
}
