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
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";

class App extends React.Component {

    render() {
        return (
            <Router>
                <TopMenu />
                <MiddleMenu />
                <MainMenu />
                <Switch>
                    <Route exact path="/bsg/">
                        <Home></Home>
                    </Route>
                    <Route path="/bsg/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/bsg/products/jetfan">
                        <Jetfan></Jetfan>
                    </Route>
                    <Route path="/bsg/products/axialfan">
                        <Axialfan></Axialfan>
                    </Route>
                    <Route path="/bsg/products/ccfan">
                        <Ccfan></Ccfan>
                    </Route>
                    <Route path="/bsg/products/epafan">
                        <Epafan></Epafan>
                    </Route>
                    <Route path="/bsg/products/pfan">
                        <Pfan></Pfan>
                    </Route>
                    <Route path="/bsg/products/fcu">
                        <Fcu></Fcu>
                    </Route>
                    <Route path="/bsg/products/ahu">
                        <Ahu></Ahu>
                    </Route>
                    <Route path="/bsg/industries/automotive">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/industries/power">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/industries/pharma">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/industries/air-makeup">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/resources">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/testing">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/parts">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/fanpedia">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/bsg/search" render={(props) => <SearchResult {...props}/>}>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>


        );
    }
}
export default App
