import React from "react";

class Fcu extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">Fan Coil Unit</h1>

                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <img className="m-3" src="../../images/fcu.png" alt="jetfan"></img>
                    </div>
                    <div className="col-md-7">
                        <p>
                            A fan coil unit (fcu), also known as a
                            Vertical Fan Coil-unit (vfc), is a simple device
                            consisting of a heating and/or cooling
                            heat exchanger or 'coil' and fan.
                            It is part of an hvac system found in
                            residential, commercial, and industrial
                            buildings.
                        </p>
                        <p>
                            A fan coil unit is a diverse device sometimes
                        using ductwork, and is used to control the
                        temperature in the space where it is
                        installed, or serve multiple spaces.
                        </p>
                        <p>It is controlled either by a manual on/off
                        switch or by a thermostat, which controls
                        the throughput of water to the heat
                        exchanger using a control valve and/or
                        the fan speed .
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Fcu
