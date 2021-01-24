import React from 'react';
import Carousel from 'react-multi-carousel';
import responsive from '../../Helpers/responsiveCarousel';
import CustomArrow from './CustomArrow';
import CustomDot from './CustomDot';
import ProductCard from './ProductCard';

export default function CarouselProduct({productData}) {
  return (
    <Carousel
      showDots
      responsive={responsive}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={600}
      removeArrowOnDeviceType=""
      customDot={<CustomDot eseaDotClass="dot-button" />}
      customLeftArrow={<CustomArrow direction="left" />}
      customRightArrow={<CustomArrow direction="right" />}
    >
      {productData.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </Carousel>
  );
}
