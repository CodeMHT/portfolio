import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cookie from "./cookie.png";
import xdrive from "./m5.png";
import api from "./api.png";



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
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/portfolio">Portfolio</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/contact">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

            <section className="page-section" id="contact" style={{ marginTop: 50 }}>
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0" >Portfolio</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    {/** Portfolio Items*/}
                    <div className="row justify-content-center">
                        {/**Portfolio Item*/}
                        <div className="col-md-6 col-lg-4 mb-5" disabled={true}>
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center"><h5 className="portfolio-heading">Cookie Treats</h5></div>
                                </div>
                                <a href="https://cookietreats.co.za"><img className="img-fluid mepage" src={cookie} alt="..." /></a>
                            </div>
                            <p className="portfolio-paragraph">A website designed to help women with their vaginal health. The website represents a vaginal spa with information and contact details</p>

                        </div>

                        {/**Portfolio Item*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center"><h5 className="portfolio-heading">XDRIVE rentals API</h5></div>
                                </div>
                                <a href="https://carrental-service-l4ls.onrender.com/"><img className="img-fluid mepage" src={api} alt="..." /></a>
                            </div>
                            <p className="portfolio-paragraph">An api designed to handle the flow of information between the XDRIVE site and the XDRIVE database. NOTE API might take a up to 60 seconds to load </p>
                            <h6 style={{ color: "red" }}>REQUIRES DATABASE RENEWAL</h6>
                        </div>

                        {/**Portfolio Item*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center"><h5 className="portfolio-heading">XDRIVE rentals</h5></div>
                                </div>
                                <a href="https://xdriverentals.onrender.com/"><img className="img-fluid mepage" src={xdrive} alt="..." /></a>
                            </div>
                            <p className="portfolio-paragraph">A vehicle rental site (specifically bmw) whcih allows user to view the website from the customer and admin side. Uses the API previously mentioned</p>
                            <h6 style={{ color: "red" }}>REQUIRES DATABASE RENEWAL</h6>
                        </div>

                    </div>
                </div>
            </section>


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