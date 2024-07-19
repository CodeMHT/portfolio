import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import emailjs from '@emailjs/browser';


const Home = () => {


    return (
        <>
            <body id="page-top">
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
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/portfolio">Portfolio</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/about">About</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/** Masthead*/}
                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">

                        <img className="masthead-avatar mb-5" src="/public/favicon.ico" alt="..." />

                        <h1 className="masthead-heading text-uppercase mb-0">Mhlabunzima Gwala</h1>

                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <p className="masthead-subheading font-weight-light mb-0">Software Engineer</p>
                    </div>
                </header>

                {/**Portfolio Section*/}
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/**About Section*/}
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>

                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                                <i className="fas fa-download me-2"></i>
                                Free Download!
                            </a>
                        </div>
                    </div>
                </section>

                {/**Contact Section*/}
                <section className="page-section" id="contact">
                    <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-7">

                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: 10 }} data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    {/**  <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/**<!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->*/}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                                    <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                                </form>
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
                    <div className="container"><small>Copyright &copy; MHT Gwala</small></div>
                </div>
                {/**<!-- Portfolio Modals-->
        <!-- Portfolio Modal 1-->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">

                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>

                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div>

                                            <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />

                                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;