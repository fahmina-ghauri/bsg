import React from "react";

class Ahu extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">Air Handling Unit</h1>

                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <img className="m-3" src="../images/ahu.png" alt="jetfan"></img>
                    </div>
                    <div className="col-md-7">
                        <p>
                        An air handler, or air handling unit (often
abbreviated to AHU), is a device used to regulate
and circulate air as part of a heating,
ventilating, and air-conditioning (hvac) system.
</p><p>An air handler is usually a large metal box
containing a blower, heating or cooling
elements, filter racks or chambers, sound
attenuators, and dampers.
</p><p>Air handlers usually connect to a ductwork
ventilation system that distributes the
conditioned air through the building and
returns it to the AHU.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Ahu
