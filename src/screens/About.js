import React from 'react'
import '../styles/home.scss';
import '../styles/about.scss';
import { Navbar } from '../components';
import { IMG } from '../constants';

export default function About() {
    return (
        <>
            <Navbar active="about" />
            <div className="About-Top-Container">
                <div className="App">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h1 className="txt-White">Who Are We?</h1>
                            <br />
                            <h5 className="txt-White">
                                <strong>Arcane Analytics</strong> is a firm offering services in consultancy for your business needs. We focus on several aspects of business including business development, investment, project financing, business analysis and strategic management. We provide client-personal focus on your business and its aspects to ensure that these are set up for your business to grow and improve efficiency.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="App">
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '25%' }} src={IMG.Mission} />
                    </div>
                    <div className="col-md-6">
                        <h1 className="txt-black">Our Mission.</h1>
                        <br />
                        <h5 className="txt-black" style={{ fontWeight: 'bold' }}>We take the time to understand your needs use and provide you with most appropriate  and intelligent solutions. </h5>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="App">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="txt-black">Our Vision.</h1>
                        <br />
                        <h5 className="txt-black" style={{ fontWeight: 'bold' }}>
                            To assist our clients in achieving excellence and reaching their full potential. We are dedicated to supporting our clients throughout their journey, providing them with the necessary tools, expertise, and guidance to excel in their respective fields.
                        </h5>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '25%' }} src={IMG.Vision} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="App" style={{ textAlign: 'center' }}>
                <h1 className="txt-Accent">Our Values.</h1>
                <br />
                <h5 className="txt-black" style={{ fontWeight: 'bold' }}>
                    Every person should have the opportunity to improve themselves, regardless of their background or circumstances. It is a fundamental principle that recognizes the potential for growth and change inherent in every individual. By providing equal access to opportunities for personal development, we foster inclusivity, fairness, and collective progress. This belief not only benefits individuals but also contributes to the advancement and well-being of society as a whole.
                </h5>

            </div>
            <br />
            <br />
        </>
    )
}
