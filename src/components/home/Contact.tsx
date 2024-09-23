import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="s-contact target-section">

            <div className="row contact-top">
                <div className="column lg-12">
                    <h2 className="text-pretitle">
                        Get In Touch
                    </h2>

                    <p className="h1">
                        I'd love to hear from you.
                        Whether you have a question or just
                        want to chat about tech — shoot me a message.
                    </p>
                </div>
            </div>
            {/*end contact top*/}

            <div className="row contact-bottom">
                <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                    <h3 className="text-pretitle">Reach me at</h3>
                    <p className="contact-links">
                        <a href="mailto:kylesa14@gmail.com" className="mailtoui">kylesa14@gmail.com</a> <br/>
                        <a href="tel:+27662991812">+27 66 299 1812</a>
                    </p>
                </div>
                <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                    <h3 className="text-pretitle">Social</h3>
                    <ul className="contact-social">
                        <li><a href="https://www.linkedin.com/in/kyle-s-b43930239/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/KyleSaunders01" target="_blank">Github</a></li>
                        <li><a href="https://stackoverflow.com/users/22295366/kyle-saunders" target="_blank">StackOverflow</a></li>
                    </ul>
                </div>
                <div className="column lg-4 md-12 contact-block">
                <a href="mailto:kylesa14@gmail.com" className="mailtoui btn btn--medium u-fullwidth contact-btn">Say
                        Hello.</a>
                </div>
            </div>
            {/*end contact bottom*/}

        </section>
    );
};

export default Contact;
