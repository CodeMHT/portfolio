import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./image (1).png"
//import logo from "./codecamp.jpg"

const Me = () => {

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

            {/**About Section*/}
            <section className="page-section bg-primary text-white mb-0" id="about" style={{ marginTop: 50 }}>
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div class="row" >
                        <div class="column ms-auto"><p class="lead2" style={{ fontSize: "bold" }}>Greetings! You might call me Mhlaba, although my name is Mhlabunzima. I'm an enthusiastic software engineer who loves creating complex websites that combine front-end and back-end technologies. I'm a final-year student at the University of Johannesburg, where I'm studying computer science and informatics for my bachelor's degree. I'm always looking for ways to improve my knowledge and learn new skills. In addition to personal development, I want to become a priceless asset to any person or organization I work with.</p></div>
                        <div class="col-lg-4 me-auto"><a href="https://www.linkedin.com/in/mhlabunzima-gwala-a56b30274/"><img class="mepage" src={image} alt="..." style={{ height: 400, width: 400 }} /></a></div>
                    </div>
                </div>
            </section>

            <section className="page-section" style={{ width: 1400 }}>

                <h2 className=".masthead-subheading text-center" style={{ color: "teal", textDecoration: "underline" }}>Skills</h2>

                {/**Skills */}
                <div className="row">
                    <div className="col-lg-4 ms-auto">

                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>Javascript</h6>
                        <progress className="pbar" value="81" max="100" ></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>Java</h6>
                        <progress className="pbar" value="73" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>C++</h6>
                        <progress className="pbar" value="60" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>C#</h6>
                        <progress className="pbar" value="81" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>HTML</h6>
                        <progress className="pbar" value="81" max="100"></progress>

                    </div>
                    <div className="col-lg-4 ms-auto">

                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>SQL</h6>
                        <progress className="pbar" value="78" max="100" ></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>CSS</h6>
                        <progress className="pbar" value="70" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>NodeJS</h6>
                        <progress className="pbar" value="80" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>ReactJS</h6>
                        <progress className="pbar" value="80" max="100"></progress>
                        <br />
                        <h6 className=".masthead-subheading" style={{ color: "teal" }}>Wordpress</h6>
                        <progress className="pbar" value="81" max="100"></progress>

                    </div>
                </div>
            </section>
            <section className="page-section" style={{ width: 1400 }}>

                <h2 className=".masthead-subheading text-center" style={{ color: "teal", textDecoration: "underline" }}>Certifications</h2>
                {/**<table className="table layout">
                    <thead>
                        <tr>
                            <th scope="col">.</th>
                            <th scope="col">Details</th>
                            <th scope="col">Certification</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        <tr>
                            <th scope="row"><img src={logo} alt="FCC" width={40} height={40} /></th>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>*/}

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

        </main >
    )
}

export default Me;