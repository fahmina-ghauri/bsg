import React from "react";

class Axialfan extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">Axial Fan</h1>

                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <h5 className="h5 m-3 d-flex justify-content-center">Tachnical Drawing of Tube Axial Fan</h5>
                        <img src="../images/axialfan.png" alt="axial fan" style={{width: "50%",display: 'block', marginLeft : 'auto', marginRight: 'auto'}}></img>
                    </div>
                    <div className="col-md-7">
                        <p>
                            An axial fan is a type of fan that causes air
                            to flow through it in an axial direction,
                            parallel to the shaft about which the
                            blades rotate.

                            The flow is axial at entry and exit. the fan is
                            designed to produce a pressure difference,
                            and hence force, to cause a flow through
                            the fan.

                            Factors which determine the performance
                            of the fan include the number and profile
                            of the blades.
</p><p>
                            Fans have many applications such as
                            ventilation including in wind tunnels and
                            cooling towers.

                            Design parameters include power, flow
                            rate, pressure rise and efficiency

                            Axial fans generally comprise fewer blades
                            (two to six) than ducted fans.

                            Axial fans commonly have larger radius
                            and lower speed than ducted fans (esp. at
                            similar power.
</p><p>
                            BSG manufactures three type of axial fans
                            <ol><li> Tube Axial Fans</li>
                            <li> Wall Mounted Propellor Fans</li>
                            <li> Specialized Axial Fans (Jet Fans)</li>
                            </ol>
</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Axialfan
