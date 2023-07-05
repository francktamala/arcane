import { IMG } from '../constants';
import '../styles/header.scss';
import {
    Link
} from "react-router-dom";
import React, {useState, useEffect} from "react"

function Header({ active }) {

    const [isFixed, setIsFixed] = useState(false);

    function checkIsScrolled() {
        if (window.scrollY > 10)
            setIsFixed(true);
        else
            setIsFixed(false);
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        window.addEventListener("scroll", () => {
            checkIsScrolled()
        })
    }, [])

    return (
        <nav class={"navbar navbar-expand-lg header App custom-toggler" + ((isFixed || active === "services") ? " navbar-scrolling" : "")}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={IMG.Logo} alt="Logo" class={"d-inline-block align-text-top Logo" + (isFixed ? " Logo-scrolling" : "")} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class={"nav-link" + (active == "home" ? " active" : "")} aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + (active == "services" ? " active" : "")} to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + (active == "about" ? " active" : "")} to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + (active == "contact" ? " active" : "")} to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
