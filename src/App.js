import React from "react";
import TopMenu from "./TopMenu";
import MiddleMenu from "./MiddleMenu";
import MainMenu from "./MainMenu";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jetfan from "./Jetfan";
import Axialfan from "./Axialfan";
import Ccfan from "./Ccfan";
import Epafan from "./Epafan";
import Pfan from "./Pfan";
import Fcu from "./Fcu";
import Ahu from "./Ahu";
import ComingSoon from "./ComingSoon";

class App extends React.Component {

    render() {
        return (
            <Router>
                <TopMenu />
                <MiddleMenu />
                <MainMenu />
                <Switch>
                    <Route exact path="/bsg">
                        <Home></Home>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/products/jetfan">
                        <Jetfan></Jetfan>
                    </Route>
                    <Route path="/products/axialfan">
                        <Axialfan></Axialfan>
                    </Route>
                    <Route path="/products/ccfan">
                        <Ccfan></Ccfan>
                    </Route>
                    <Route path="/products/epafan">
                        <Epafan></Epafan>
                    </Route>
                    <Route path="/products/pfan">
                        <Pfan></Pfan>
                    </Route>
                    <Route path="/products/fcu">
                        <Fcu></Fcu>
                    </Route>
                    <Route path="/products/ahu">
                        <Ahu></Ahu>
                    </Route>
                    <Route path="/industries/automotive">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/industries/power">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/industries/pharma">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/industries/air-makeup">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/resources">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/testing">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/parts">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/fanpedia">
                        <ComingSoon></ComingSoon>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>


        );
    }
}
export default App
