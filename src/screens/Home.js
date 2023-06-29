import { useEffect } from 'react';
import { Navbar, ServiceCard } from '../components';
import { SERVICES } from '../constants';
import '../styles/home.scss';
import {
    Link
} from "react-router-dom";

function Home() {

    useEffect(() => {
        document.title = "Arcane Analytics"
    }, [])

    return (
        <>
            <Navbar active="home" />
            <div className="topContainer">
                <div className="App-home">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h1 className="txt-White">The Fast Moving World!</h1>
                            <h5 className="txt-White">
                                In today's world that is changing so quickly, innovation and rethinking how to do business are essential components for remaining competitive and relevant. Businesses need to have a forward-thinking mindset and be open to exploring new ideas and ways if they are to embrace these notions.
                            </h5>
                        </div>
                        <div className="col-lg-4 col-md-4"></div>
                    </div>
                    <br />
                    <Link className="btn btn-outline-primary" to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="App-home">

                <div className="row">
                    <div className='col-lg-4 col-0'></div>
                    <div className='col-lg-4 col-6'><h1 className="txt-black" style={{ textAlign: 'center' }}>Our Services</h1></div>
                    <div className='col-lg-4 col-6' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Link to="/services"><h5 className="txt-Accent" style={{ textAlign: 'right' }}>See All.</h5></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    {SERVICES.map((item, index) => {
                        if (index < 3)
                            return <ServiceCard key={index} {...{ ...item, isDark: false }} />
                        else
                            return null;
                    })}

                </div>
            </div>
            {/* <br /> */}
            <div className="bottomContainer">
                <div className="App-home" style={{ textAlign: 'center' }}>
                    <h2 className="txt-White">Are you ready to take control of your business ?</h2>
                    <br />
                    <Link className="btn btn-outline-primary" to="/contact">Get In Touch</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
