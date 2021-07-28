import React from "react";
import TopMenu from "./TopMenu";
import MiddleMenu from "./MiddleMenu";
import MainMenu from "./MainMenu";

class Home extends React.Component {

    render() {
        return (
            <div>
                <img className="img-fluid" alt="timer" src="../images/banner.png" style={{ height: "50%" }} />
                <div className="row m-3">
                    <div className="col-md-6">
                        <i class="fa fa-angle-double-right fa-3x fa-fw"></i>
                        <h2 className="h2" style={{ display: "inline-block" }}>
                            WHO WE ARE </h2>
                        <div style={{ marginLeft: "11%" }}>
                            <p>
                                {/* <i class="fa fa-angle-right fa-fw"></i> */}
                            “NO COMPROMISE IN QUALITY “ is our moto</p>
                            <p>
                                {/* <i class="fa fa-angle-right fa-fw"></i> */}
                     BSG INDUSTIRES was established in 2018 as a fan manufacturer.
                     Unlike any other industry in this sector we are producing air handling
                     solutions such as “AXIAL FANS, CENTRIFUGAL FANS, JET
                    FANS, PROPELLOR FANS,AIR HANDLING
                    UNITS, FAN COIL UNITS” through extensive research and development
                    in the fluid mechanics subject of engineering.</p>
                            <p>
                                {/* <i class="fa fa-angle-right fa-fw"></i> */}
                    RESEARCH AND DEVELOPMENT IS CURRENTLY
                    IN PROGRESS IN COLLABORATION WITH NED
                    UNIVERSITY
                    OF
                    ENGINEERING
                    AND TECHNOLOGY.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images/fan.png" alt="fan" className="img-responsive" width="80%"></img>
                    </div>

                </div>
                <div className="row m-0">
                    <img src="images/background-1.jpg" alt="background" className="img-responsive" height="250px" width="100%"></img>
                    <div style={{ position: "absolute", padding: "3%", color:"white" }}>
                        <h2>QUALITY POLICY</h2>
                        <p>CUSTOMER SATISFACTION WITHOUT WORRYING
                        ABOUT FINANCIAL LOSSES. LEADING PROVIDER OF BEST AND LONG
LASTING HVAC PRODUCTS AND SOLUTIONS</p>
                        <p>TO BRING REVOLUTION IN AIR CONTROL
                        TECHNOLOGIES AND PROVIDING THE BEST
                        QUALITY PRODUCTS IN THE MOST AFFORDABLE
                        RATES AND SERVICES. WE ARE COMMITTED TO
                        UPHOLD OUR MOTTO AND PHILOSOPHY
                        THROUGH CONTINUOUS IMPROVEMENT BY
                        USING INTERNAL EXPERTISE AND EXTERNAL
FEEDBACK TO WIN CUSTOMER CONFIDENCE. <a href="#">Read More</a></p>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-md-6">
                        <img src="images/fan.png" alt="fan" className="img-responsive" width="80%"></img>
                    </div>

                    <div className="col-md-6">
                        <i class="fa fa-angle-double-right fa-3x fa-fw"></i>
                        <h2 className="h2" style={{ display: "inline-block" }}>
                            MAINTENANCE SERVICES </h2>
                        <div>
                            <p style={{marginTop: "5%"}}>
                            BSG INDUSTRIES DOES NOT LIMIT ITSELF TO
MANUFACTURING OF NEW PRODUCTS ONLY.</p>

<p>
MANY INDUSTRIES FACE FREQUENT PROBLEMS
RELATED TO FANS AND BLOWERS IMPELLER
DAMAGE, UNBALANCE AND OTHER MAINTENANCE
PROBLEMS.
</p><p>THEREFORE WE PROVIDE THE SERVICE OF
MANUFACTURING THE IMPELLER ONLY IF THE
BLADES AND HUB GETS DAMAGED.</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home
