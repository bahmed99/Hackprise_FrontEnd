

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



import InforEnLigne from "./components/Participants/Infor/index1"
import InforEnPresentiel from "./components/Participants/Infor/InforEnPresentiel"

import Stb from "./components/Participants/Stb/Stb"
import Infor from "./components/Participants/Infor/index1"

import InforAbout from "./components/Apropos/Infor"
import StbAbout from "./components/Apropos/Stb"


import Blog from "./components/Blog/Blog.js"
import BlogEditeur from "./pages/admin/Article/BlogEditor"
import BlogDelete from "./pages/admin/Article/BlogDelete"





export default function MainRouter() {

    return (
        
        <div>
            <Switch>
                <Route exact path="/" component={HomeOne} />
                <Route exact path={"/register"} component={Contact} />




                
                <Route exact path={"/eje"} component={Participants} />






                <Route exact path={"/eje/stb"} component={Stb} />
                <Route exact path={"/eje/infor"} component={Infor} />
{/* 
                <Route exact path={"/eje/infor/enLigne"} component={InforEnLigne} />
                <Route exact path={"/eje/infor/enPresentiel"} component={InforEnPresentiel} /> */}


                <Route exact path={"/eje/write/blog"} component={BlogEditeur} />
                <Route exact path={"/eje/delete/blog"} component={BlogDelete} />

                <Route exact path={"/about/infor"} component={InforAbout} />
                <Route exact path={"/about/stb"} component={StbAbout} />


                <Route exact path={"/article/:id"} component={Blog} />

                <Route exact path={"/eje/stb/:id"} component={ParticipantStb} />
                <Route exact path={"/eje/infor/:id"} component={ParticipantInfor} />
                <Route exact component={Error404} />
            </Switch>
        </div>
    )
}
