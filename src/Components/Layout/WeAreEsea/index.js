/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line arrow-body-style
import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import {Spinner} from 'reactstrap';
import './index.scss';
import crsl1 from '../../../Assets/Photos/crsl1.jpg';
import crsl2 from '../../../Assets/Photos/crsl2.jpg';
import crsl3 from '../../../Assets/Photos/crsl3.jpg';
import crsl4 from '../../../Assets/Photos/crsl4.jpg';
import responsive from '../../../Helpers/carouselWeAreeSea';
import CustomDot from '../../ComponentHelpers/CustomDot';

const items = [
  {
    src: crsl1,
    altText: 'integritas-keteladanan',
    caption: 'Integritas dan Keteladanan yang Tinggi.',
  },
  {
    src: crsl2,
    altText: 'pelayanan-terbaik',
    caption: 'Melayani Dengan Pelayanan Terbaik dan Penuh Tanggung Jawab',
  },
  {
    src: crsl3,
    altText: 'inovatif-ekspansif',
    caption: 'Inovatif, Ekpansif, dan Penuh Kebaruan',
  },
  {
    src: crsl4,
    altText: 'kemitraan-progresif',
    caption: 'Kemitraan yang Progresif',
  },
];

export default function WeAreEsea() {
  return (
    <header id="weareesea" className="mb-5">
      {!items.length ? (
        <div className="carousel-home-wrapper d-flex justify-content-center align-items-center">
          <Spinner size="lg" color="esea-main" />
        </div>
      ) : (
        <MultiCarousel
          customDot={<CustomDot eseaDotClass="dot-button-home" />}
          showDots
          autoPlaySpeed={5000}
          autoPlay
          infinite
          removeArrowOnDeviceType="mobile"
          responsive={responsive}
        >
          {items.map((item, key) => {
            return (
              <div
                key={key}
                className="w-100 position-relative overflow-hidden carousel-home-wrapper"
              >
                <img
                  className="img-carousel-home"
                  src={item.src}
                  alt={item.altText}
                />
                <div className="w-100 d-flex align-items-center justify-content-center position-absolute carousel-home-caption">
                  <text className="text-light">{item.caption}</text>
                </div>
              </div>
            );
          })}
        </MultiCarousel>
      )}
    </header>
  );
}
