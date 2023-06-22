import { Navbar } from '../components';
import '../styles/home.scss';
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar active="home" />
            <div className="topContainer">
                <div className="App-home">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h1 className="txt-White">Some Title Here</h1>
                            <h5 className="txt-White">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-black">Some Title Here</h3>
                            <h5 className="txt-black">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-black">Some Title Here</h3>
                            <h5 className="txt-black">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" style={{marginBottom: 30}}>
                        <div className="service-card">
                            <h3 className="txt-black">Some Title Here</h3>
                            <h5 className="txt-black">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                    </div>
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
