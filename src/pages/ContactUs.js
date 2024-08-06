import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FirstFold1 from '../components/FirstFold1';
import Footer from '../components/Footer';

function ContactUs() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        msg: ""
    });

    useEffect(() => {
        setTimeout(() => {
            const windowHeight = window.innerHeight;
            const scrollPosition = windowHeight * 0.55;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }, 100);
    }, [location]);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        alert("Thank You For Contacting Us!");
    };

    return (
        <div style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-px box-border leading-[normal] tracking-[normal]">
            <FirstFold1 />
            <section className="py-5 self-stretch flex flex-col items-center justify-center box-border max-w-full">
                <div className="md:container p-5 md:mx-auto mq750:!p-5 mq750:!py-[40px]" style={{ backgroundColor: "#FFCBA4", borderRadius: "2rem" }}>
                    <h1>Contact <span style={{ color: '#D26600' }}>US</span></h1>
                    <form id="contact_form" name="contact_form">
                        <div className="mb-5 row">
                            <div className="col">
                                <label>First Name</label>
                                <input placeholder='Enter First Name' type="text" required maxLength="50" className="form-control" id="firstName" name="first_name" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input placeholder='Enter Last Name' type="text" required maxLength="50" className="form-control" id="lastName" name="last_name" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mb-5 row">
                            <div className="col">
                                <label htmlFor="email_addr">Email address</label>
                                <input type="email" required maxLength="50" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}
                                    placeholder="Enter Email" />
                            </div>
                            <div className="col">
                                <label htmlFor="phone_input">Phone</label>
                                <input type="tel" required maxLength="50" className="form-control" id="phone" name="Phone" value={formData.phone} onChange={handleChange}
                                    placeholder="Enter Phone Number" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder='Write your message...' className="form-control" id="msg" name="message" rows="5" value={formData.msg} onChange={handleChange}></textarea>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary px-4 btn-lg">Send</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs