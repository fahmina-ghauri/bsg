import React from "react";

class Ccfan extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">Centrifugal Cabinet Fan</h1>

                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <img className="m-3" src="../images/ccfan1.png" alt="ccfan"></img>
                        <img className="m-3" src="../images/ccfan.png" alt="ccfan"></img>
                    </div>
                    <div className="col-md-7">
                        <p>
                            Centrifugal fans are designed for a wide
                            range of air volumes and pressures.
</p><p>
                            With backward inclined, backward curved,
                            backward inclined airfoil, radial and
                            forward curved wheel types, centrifugal
                            fans offer the flexibility to match the
                            performance and application at the highest
                            efficiency.
</p><p>
                            Most models are available in single-wide
                            or double-wide configurations that allow
                            for even higher volumes of air.
</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Ccfan
