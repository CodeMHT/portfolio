import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Portfolio = () => {
    return (
        <main id="page-top">
            {/**Navigation*/}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/about">MHT GWALA</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/me">About</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/contact">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </nav>


            {/** Footer */}
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Johannesburg, Gauteng
                                <br />
                                South Africa
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-1">

                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/chillycheesecalii/"><FontAwesomeIcon icon="fab fa-fw fa-instagram" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/mhlabunzima-gwala-a56b30274/"><FontAwesomeIcon icon="fab fa-fw fa-linkedin-in" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/CodeMHT/"><FontAwesomeIcon icon="fab fa-fw fa-github" /></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; <a href="https://www.linkedin.com/in/mhlabunzima-gwala-a56b30274/">MHT Gwala</a></small></div>
            </div>

        </main>
    )
}

export default Portfolio;