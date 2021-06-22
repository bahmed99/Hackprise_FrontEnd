

import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import HomeOne from './pages/HomeOne'
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

import Participants from "./pages/admin/Participants"
import ParticipantStb from "./components/Participant/stb/Index"
import ParticipantInfor from "./components/Participant/infor/Index"



import InforEnLigne from "./components/Participants/Infor/InforEnligne"
import InforEnPresentiel from "./components/Participants/Infor/InforEnPresentiel"

import Stb from "./components/Participants/Stb/Stb"
import Infor from "./components/Participants/Infor/Index"

export default function MainRouter() {

    return (
        
        <div>
            <Switch>
                <Route exact path="/" component={HomeOne} />
                <Route exact path={"/register"} component={Contact} />
                <Route exact path={"/eje"} component={Participants} />


                <Route exact path={"/eje/stb"} component={Stb} />
                <Route exact path={"/eje/infor"} component={Infor} />

                <Route exact path={"/eje/infor/enLigne"} component={InforEnLigne} />
                <Route exact path={"/eje/infor/enPresentiel"} component={InforEnPresentiel} />


                <Route exact path={"/eje/stb/:id"} component={ParticipantStb} />
                <Route exact path={"/eje/infor/:id"} component={ParticipantInfor} />
                <Route exact component={Error404} />
            </Switch>
        </div>
    )
}
