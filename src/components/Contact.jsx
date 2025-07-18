import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Get in Touch</h4>
                        <p><strong>Address:</strong> 123 Pizza Street, Food City, FC 12345</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Email:</strong> contact@pizzahut.com</p>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3b23b3a0!2sPizza%20Hut!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;