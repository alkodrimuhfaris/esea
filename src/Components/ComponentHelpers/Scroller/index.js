/* eslint-disable prettier/prettier */
import React from 'react'
import ScrollToTop from 'react-scroll-up';
import { FaChevronUp } from 'react-icons/fa';
import "./index.scss"

export default function Scroller() {

    return (
        <>
            <ScrollToTop showUnder={160} style={{ zIndex: '999' }}>
                <span className="scroll__btn d-flex justify-content-center align-items-center">
                    <FaChevronUp size="1.5em" color="#FFF" fontSize="large" />
                </span>
            </ScrollToTop>
        </>
    )
}
