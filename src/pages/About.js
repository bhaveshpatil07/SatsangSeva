import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import FirstFold1 from '../components/FirstFold1'
import { useLocation } from 'react-router-dom';
import '../Csss/AboutUs.css';

function About() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const sectionId = location.hash.substring(1); // Remove the leading '#'
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    const offsetTop = sectionElement.offsetTop;
                    const windowHeight = window.innerHeight;
                    const additionalScroll = windowHeight * 0.2; // 10% of window height
                    window.scrollTo({ top: offsetTop - additionalScroll, behavior: 'smooth' });
                }
            }, 100);
        } else {
            setTimeout(() => {
                const windowHeight = window.innerHeight;
                const scrollPosition = windowHeight * 0.55;
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }, 100);
        }
    }, [location, location.hash]);

    return (
        <div style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-px box-border leading-[normal] tracking-[normal]">
            <FirstFold1 />
            <section className="pt-5 self-stretch flex flex-col items-center justify-center box-border max-w-full">
                <div style={{ minHeight: "90vh", color: "black", borderRadius: "2rem" }} className="about-us container gap-0 w-full flex flex-col p-5 mb-5 mq750:!p-0">
                    <h2><b>ABOUT <span>US</span></b></h2>
                    <h4 className='px-4'>Welcome to Satsang Seva, your dedicated online platform for connecting with religious and spiritual events. At Satsang Seva, we bridge the gap between event organizers and participants, making it easier for you to find and join spiritual gatherings and religious ceremonies in your area.</h4>
                    <hr className="self-stretch border border-1 opacity-75 my-4" />
                    <div className="flex flex-row gap-5 px-4 mq750:!flex-col">
                        <div className="mission">
                            <h2>Our <span> Mission</span></h2>
                            <h4>Our mission is to foster a sense of community and spiritual growth by providing a seamless connection between those who organize religious events and those who wish to participate. We believe in the power of collective spiritual experiences and aim to make these accessible to everyone.</h4>
                        </div>
                        <div className="offer">
                            <h2>What We <span>Offer</span></h2>
                            <h4>Whether you are interested in Ramayan recitations, Sundarkand sessions, Shiv Puran readings, Jagran nights, Khatu Shyam Bhajan Sandhyas, or yoga and meditation retreats, Satsang Seva is your go-to platform. We list a wide variety of events, ensuring there's something for everyone seeking spiritual enrichment.</h4>
                        </div>
                    </div>
                    <hr id='howitworks' className="self-stretch border border-1 opacity-75 my-4" />
                    <div className="works px-4">
                        <h2>How It <span>Works</span></h2>
                        <h4>Discover Events: Browse through our comprehensive list of religious and spiritual events happening near you. Our platform provides detailed information about each event, including the type, date, time, location, and whether it is free or chargeable.

                            <br /><span>Connect with Organizers:</span> Event organizers, hosts, and sponsors can easily list their events on our platform, reaching a wider audience who share their spiritual interests.

                            <br /><span>Join Events:</span> Participants can visit our website, find events of interest, and join them with ease. Whether you wish to attend alone or with family, our platform ensures you have all the necessary details to make your visit fulfilling.</h4>
                    </div>
                    <hr className="self-stretch border border-1 opacity-75 my-4" />
                    <div className="choose">
                        <h2 className='px-4'>Why Choose <span>Satsang Seva</span>?</h2>
                        <h4 className='px-4'>
                            <span>Comprehensive Listings:</span> Our platform features a diverse range of events catering to various religious and spiritual practices.
                            <br /><span>Easy Access:</span> Find events in your vicinity with just a few clicks and get all the details you need to attend.
                            <br /><span>Community Building:</span> We aim to build a vibrant community of like-minded individuals who share a passion for spiritual growth and communal worship.
                            <br /><span>Support for Organizers:</span> Event organizers can reach a larger audience and effectively manage their event listings through our user-friendly interface.
                            <br /><br />Join Us
                            Become a part of the Satsang Seva community today. Whether you are an event organizer looking to share your spiritual gatherings or a participant eager to join, our platform is designed to meet your needs.
                            <br />
                            <br />For more information or to get started, visit our website and explore the world of spiritual and religious events waiting for you.</h4>
                    </div>
                    <h1 className='max-w-full font-semibold font-sacramento mt-5 px-5'>Satsang Seva - <span>Jahan Bhakti,</span> Wahan Hum</h1>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About