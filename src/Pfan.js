import React from "react";

class Pfan extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">Propeller Fan</h1>

                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <h5 className="h5 d-flex justify-content-center mb-3">Technical Drawing of Propeller Fan</h5>
                        <img src="../images/pfan.png" alt="pfan" style={{ width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}></img>
                    </div>
                    <div className="col-md-7">
                        <p>
                            The propeller fan is also known as <i> The
                            Panel Fan </i> and it is the most commonly used
                            fan amoung of all.
                            It can be found in industrial, commercial,
                            institutional and residential application.
                            It can exhaust air or corrosive gases from
                            factories, welding shops, foundries,
                            furnace rooms, laboratories, laundries,
                            stores, or residential attics or windows.
                            </p><p>
                            There are two types of propeller fans
                            </p><ol>
                            <li>Direct driven propeller fans</li>
                            <li>Belt driven propeller fans</li>
                        </ol>
                        <p>
                            Advantages of belt driven fans
                            <ol>
                                <li> Belt driven fan results in greater
                                flexibility of performance, since any speed
                                can be obtained for the fan wheel by
                                selection of the proper pully ratio.
                                however when the speed is increased to
                                boost the flow, the motor power will also
                                increase as the third power of the rpm
                            ratio.</li>
                                <li>In large sizes, belt drive is more preferable
                                since it will keep the sound of the fan
                                wheel low or moderate while keeping the
                                motor speed high for lower cost
                            </li></ol>
                        </p><p>
                            Advantages of direct driven fans
                            <ol><li>
                             It has lower number of component s
                            resulting in lower cost.
                            </li><li> It requires no maintenance and regular
                            checkups for adjustment of belt.
                            </li></ol>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Pfan
