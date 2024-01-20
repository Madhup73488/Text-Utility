import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }} >
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="button" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable DarkMode' : 'Disable DarkMode'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
