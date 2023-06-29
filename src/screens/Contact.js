import React, { useEffect } from 'react'
import '../styles/contact.scss';
import '../styles/about.scss';
import '../styles/header.scss';
import { Navbar } from '../components';
import { IMG } from '../constants';
import Icon from 'react-google-material-icons'

export default function Contact() {

    useEffect(() => {
        document.title = "Contact Us | Arcane Analytics"
    }, [])

    return (
        <div style={{height: '94vh'}}>
            <Navbar active="contact" />
            <div className="About-Top-Container">
                <div className="App">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="txt-White">Get In Touch.</h1>
                            <br />
                            <h5 className="txt-White">We'd love to hear from you. Here is how you can reach us.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Contact-Container">
                <div className="row">
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <Icon icon="phone" size={50} />
                        <br />
                        <br />
                        <h5 className="txt-black">Please give us a call, we'd love to hear from you.</h5>
                        <a className="nav-item" href="tel:+27787396007" ><h5>{"+27 (78) 739-6007"}</h5></a>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <Icon icon="email" size={50} />
                        <br />
                        <br />
                        <h5 className="txt-black">Please send us an email, we'd love to hear from you.</h5>
                        <a className="nav-item" href="mailto:Info@arcaneanalytics.co.za" ><h5>Info@arcaneanalytics.co.za</h5></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
