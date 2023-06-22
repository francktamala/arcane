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
                            <h1 className="txt-White">The Best Analyst In The Market.</h1>
                            <br />
                            <h5 className="txt-White">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="App">
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '35%' }} src={IMG.Mission} />
                    </div>
                    <div className="col-md-6">
                        <h1 className="txt-black">Our Mission.</h1>
                        <br />
                        <h5 className="txt-black" style={{ fontWeight: 'bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
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
                        <h5 className="txt-black" style={{ fontWeight: 'bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '30%' }} src={IMG.Vision} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="App" style={{ textAlign: 'center' }}>
                <h1 className="txt-Accent">Our Values.</h1>
                <br />
                <h5 className="txt-black" style={{ fontWeight: 'bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>

            </div>
            <br />
            <br />
        </>
    )
}
