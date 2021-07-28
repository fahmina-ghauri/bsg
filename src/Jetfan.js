import React from "react";

class Jetfan extends React.Component {

    render() {
        return (
            <div>
                <div className="row m-0">
                    <h1 className="display-3 text-secondary p-fan-heading">JETFAN</h1>
                
                </div>
                <div className="row mb-2">
                    <div className="col-md-5">
                        <img className="m-3" src="../../images/jetfan.png" alt="jetfan"></img>
                    </div>
                    <div className="col-md-7">
                        <p>
Jet fans are specialized fans used for tunnel and car parking ventilation systems. They can be reversible or unidirectional. They are also known as Impulse or Induction fans. These fans support the natural flow between the supply air and extract air zones.
</p><p>
They provide motion in regions with low air speeds, thus guarnteeing the daily ventilation requirement for all areas. So, Jet fans are only installed at particular points. They take up less than 0.5% of the ceiling area. This leaves room for other technical installations and the visibility across the parking decks is improved.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Jetfan
