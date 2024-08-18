import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import FirstFold1 from '../components/FirstFold1';
import Footer from '../components/Footer';
import axios from 'axios';
import Loader from '../components/Loader';

function ContactUs() {
    const url = process.env.REACT_APP_BACKEND;
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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

    const validateForm = () => {
        const { firstName, lastName, email, phone, msg } = formData;
        let isValid = true;
        let errorAt = "";

        if (!firstName.trim()) {
            errorAt += "FirstName ";
            isValid = false;
        }

        if (!lastName.trim()) {
            errorAt += ", LastName";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            errorAt += ", Email";
            isValid = false;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            errorAt += ", Phone Number";
            isValid = false;
        }

        if (!msg.trim()) {
            errorAt += ", Message.";
            isValid = false;
        }

        return errorAt;
    };

    const handleSubmit = async() => {
        const error = validateForm(formData);
        if (error.length > 1) {
            return alert("Invalid Inputs : " + error);
        }
        setLoading(true);
        //Axios call to backend Nodemailer send mail to info@satsangseva.com
        const newData = {
            name: formData.firstName +" " + formData.lastName,
            email: formData.email,
            phoneNumber: formData.phone,
            message: formData.msg
        };
        await axios.post(url+"/admin/contactus", newData).then((resp)=>{
            console.log(resp);
            alert("Thank You For contacting us.");
            navigate("/");
        }).catch((e)=>{
            console.log(e);
            alert("Error in sending Mail! Try Again");
        }).finally(()=>{
            setLoading(false);
        });
    };
    
    return (
        <div style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-px box-border leading-[normal] tracking-[normal]">
            <FirstFold1 />
            {loading && <Loader />}
            <section className="py-5 self-stretch flex flex-col items-center justify-center box-border max-w-full">
                <div className="md:container p-5 md:mx-auto mq750:!p-5 mq750:!py-[40px]" style={{ border: "1px solid #333", borderRadius: "2rem" }}>
                    <h1 className='pb-4'>Contact <span style={{ color: '#D26600' }}>US</span></h1>
                    <div>
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
                                <label htmlFor="email">Email address</label>
                                <input type="email" required maxLength="50" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}
                                    placeholder="Enter Email" />
                            </div>
                            <div className="col">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" required maxLength="50" className="form-control" id="phone" name="Phone" value={formData.phone} onChange={handleChange}
                                    placeholder="+91-XXXXX-XXXXX" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="msg">Message</label>
                            <textarea placeholder='Write your message...' className="form-control" id="msg" name="message" rows="5" value={formData.msg} maxLength={1000} onChange={handleChange}></textarea>
                        </div>
                        <button type='submit' onClick={handleSubmit} className="btn px-4 btn-lg" style={{ backgroundColor: "#FFCBA4" }}>Send</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs