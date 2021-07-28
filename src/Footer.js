import React from 'react';
import "./navbar.css";

class Footer extends React.Component {

    render() {
        return (
            <footer className="page-footer font-small" style={{ backgroundColor: '#14697d'}}>

                <div className="footer-copyright text-center py-3 color">© 2020 Copyright:
    <a href="http://localhost:3000/" className="color"> BSG Technologies</a>
                </div>

            </footer>

        );
    }
}

export default Footer;