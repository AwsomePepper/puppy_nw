import React, { Component } from 'react';
import './App.css';



class Nav extends Component {
    render() {
        return(
            <nav style={{ 'backgroundColor': '#FFE57F' }} className="navbar navbar-expand-lg navbar-light naver-fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/" >멍트워크</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#">Map</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;


