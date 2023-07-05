import React, { useEffect } from 'react'
import '../styles/home.scss';
import '../styles/services.scss';
import { Navbar, ServiceCard } from '../components';
import { SERVICES } from '../constants';

export default function Services() {

    useEffect(() => {
        document.title = "Services | Arcane Analytics"
    }, [])

    return (
        <>
            <Navbar active="services" />
            <div className="App-home Service-Container" style={{ borderRadius: 0 }}>

                <h1 className="txt-black" style={{ textAlign: 'center' }}>Our Services</h1>
                <br />
                <div className="row">
                    {SERVICES.map((item, index) => {
                        return <ServiceCard key={index} {...{ ...item, isDark: false }} />
                    })}

                </div>
                {/* <br /> */}
                {/* <br /> */}
            </div>
        </>
    )
}
