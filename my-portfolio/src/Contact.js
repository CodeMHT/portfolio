import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [email, setEmail] = useState({
        name: "",
        mail: "",
        text: ""
    });

    const TempEmail = {
        from_name: email.name,
        from_email: email.mail,
        to_name: 'Mhlaba',
        message: email.text

    }

    //System Response to form submission
    const [message, setMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const Submit = (event) => {
        event.preventDefault()
        emailjs
            .send('service_c49ah4q', 'template_2h74a5v', TempEmail, 'VunDcHdYxVzCgZmBy')
            .then(
                () => {
                    setEmail({})
                    setMessage("Mhlabunzima Has Received your Email")

                },
                (error) => {
                    setErrorMessage("Failed to send Email");
                },
            );



    }

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

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0" >Contact Me</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    {/**Contact Form */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">

                            <form id="contactForm" onSubmit={Submit}>
                                {/**Name */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." required onChange={e => setEmail({ ...email, name: e.target.value })} />
                                    <label htmlFor="name">Full name</label>
                                </div>

                                {/**Email */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" required onChange={e => setEmail({ ...email, mail: e.target.value })} />
                                    <label htmlFor="email">Email address</label>
                                </div>

                                {/**Message */}
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." required onChange={e => setEmail({ ...email, text: e.target.value })} ></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>

                                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                                <p className="fw-bolder">{message}</p>
                                <p className="text-danger">{errorMessage}</p>
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
                <div className="container"><small>Copyright &copy; <a href="https://www.linkedin.com/in/mhlabunzima-gwala-a56b30274/">MHT Gwala</a></small></div>
            </div>
        </main>
    )
}

export default Contact;