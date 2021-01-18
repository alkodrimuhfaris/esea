/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */

import React from 'react';
import TitleBox from '../TitleBox';
import abtUsImg from '../../Assets/Photos/abtUs.png';

export default function AboutUs() {
    return (
        <section className="abtus">
            <TitleBox sectionName="About Us" />
            <h2 className="abtus__title kumbh-sans text-center">
                <span className="text-esea-main"> eSea</span> ada untuk mendekatkan nutrisi segar hasil laut kepada masyarakat Indonesia dengan penuh rasa cinta.
            </h2>
            <figure className="abtus__img-cover position-relative">
                <img className="abtus__img" src={abtUsImg} alt="about-us-img" />
            </figure>

        </section>
    )
}
