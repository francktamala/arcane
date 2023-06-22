import React from 'react'
import '../styles/home.scss';
import '../styles/services.scss';
import { Navbar } from '../components';

export default function Services() {
    return (
        <>
            <Navbar active="services" />
            <div className="App-home Service-Container" style={{ borderRadius: 0 }}>

                <h1 className="txt-White" style={{ textAlign: 'center' }}>Our Services</h1>
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-White">Some Title Here</h3>
                            <h5 className="txt-White">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-White">Some Title Here</h3>
                            <h5 className="txt-White">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-White">Some Title Here</h3>
                            <h5 className="txt-White">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
                </div>
                {/* <br /> */}
                {/* <br /> */}
            </div>
        </>
    )
}
