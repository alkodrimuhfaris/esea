/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */

import React from 'react';
import TitleBox from '../TitleBox';
import abtUsImg from '../../Assets/Photos/abtUs.png';
import abtUsCard1 from '../../Assets/Photos/abtUsCard1.png';
import abtUsCard2 from '../../Assets/Photos/abtUsCard2.png';
import abtUsCard3 from '../../Assets/Photos/abtUsCard3.png';

const items = [
    {
        src: abtUsCard1,
        text: 'Kami bergerak untuk menciptakan masa depan yang cerah dimana hasil laut segar dapat diakses dengan mudah oleh seluruh masyarakat Indonesia.'
    },
    {
        src: abtUsCard2,
        text: 'Kami menginspirasi seluruh masyarakat Indonesia agar senantiasa mengkonsumsi hasil laut yang penuh nutrisi dan berkembang bersama anak-anak bangsa.'
    },
    {
        src: abtUsCard3,
        text: 'Kami  bergerak dalam mengembangkan bisnis bersama para mitra nelayan/peternak ikan  dengan penuh inovasi agar senantiasa memberikan produk dan layanan terbaik.',
    }
];

export default function AboutUs() {
    return (
        <section className="abtus mb-5" id="aboutus">
            <TitleBox sectionName="About Us" />
            <h2 className="abtus__title kumbh-sans text-center">
                <span className="text-esea-main"> eSea</span> ada untuk mendekatkan nutrisi segar hasil laut kepada masyarakat Indonesia dengan penuh rasa cinta.
            </h2>
            <figure className="abtus__img-cover position-relative">
                <img className="abtus__img" src={abtUsImg} alt="about-us-img" />
            </figure>
            <h4 className="kumbh-sans my-5 text-center underline pb-2 mx-auto">Misi Kami</h4>
            <div className="row w-100 mx-auto d-flex justify-content-center px-5">

                {items.map((item, idx) => {
                    return (
                        <div className="col-md-6 col-sm-12 col-lg-3  my-3" key={`Card-cap-${idx}`}>
                            <div className="card abtus__card">
                                <img
                                    className="card-img-top abtus__card-img"
                                    src={item.src}
                                    alt={`Card-cap-${idx}`}
                                />
                                <div className="card-body">
                                    <p className="kumbh-sans card-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
}
