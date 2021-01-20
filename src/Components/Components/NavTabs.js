/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function NavTabs({ outerClass }) {
    const className = ["ml-auto navbar-nav me-auto mb-2 mb-lg-0"];
    if (outerClass) className.push(outerClass);

    return (
        <Router>
            <ul className={className.join(" ")}>
                <li className="nav-item">
                    <HashLink smooth to="#weareesea">
                        <text className="kumbh-sans mx-2 my-1 text-esea-main">We Are eSea</text>
                    </HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to="#product">
                        <text className="kumbh-sans mx-2 my-1 text-esea-main">Product</text>
                    </HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to="#aboutus">
                        <text className=" kumbh-sans mx-2 my-1 text-esea-main">About Us</text>
                    </HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to="#kerjasama">
                        <text className=" kumbh-sans mx-2 my-1 text-esea-main">Kerja Sama</text>
                    </HashLink>

                </li>

            </ul>
        </Router>
    );
}
