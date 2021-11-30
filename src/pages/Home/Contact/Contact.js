import React from 'react';
import './Contact.css';
import { useForm } from '@formspree/react';
import { Button } from 'react-bootstrap';

const Contact = () => {

    const [state, handleSubmit] = useForm('xnqwagvg');
    if (state.succeeded) {
        // return <p>Thanks for joining!</p>;
        document.getElementById('contact-form').reset();
        document.getElementById('poststatus').style.display = "block";

    }
    return (
        <div id="contact" class="contact p-5" style={{ paddingTop: "10%" }}>
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                contact us directly.</p>

            <div class="row">
                <div class="col-md-9 mb-md-0 mb-5 col-lg-7">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" required />
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" required />
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control" />
                                    <label for="subject" class="">Project</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2"
                                        class="form-control md-textarea" required></textarea>
                                    <label for="message">Details about project</label>
                                </div>

                            </div>
                        </div>
                        <div class="text-center text-md-left">
                            <Button class="btn btn-primary"
                                disabled={state.submitting}
                                type="submit" >Send</Button>
                        </div>
                    </form>
                    <div id="poststatus" class="status">
                        <p>Thank you. Your request Successfully Added!</p>
                    </div>
                </div>
                <div class="col-md-3 text-center col-lg-5">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <h5>Address</h5>
                            <p>Zigatola, Dhanmondi, Dhaka-1209</p>
                        </li>

                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <h5>Cell Number</h5>
                            <p>+8801789146828</p>
                        </li>
                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <h5>Email</h5>
                            <p>prosenjit.chd@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;