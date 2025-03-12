import React from "react";

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Got questions or feedback? We're here to help!
                </p>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Write your message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
