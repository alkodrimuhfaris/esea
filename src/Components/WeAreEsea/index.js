/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line arrow-body-style
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import './index.scss';
import crsl1 from '../../Assets/Photos/crsl1.jpg';
import crsl2 from '../../Assets/Photos/crsl2.jpg';
import crsl3 from '../../Assets/Photos/crsl3.jpg';

const items = [
    {
        src: crsl1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: crsl2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: crsl3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

export default function WeAreEsea() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item, i) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="crsl"
            >
                <img src={item.src} alt={item.altText} className="img" />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    return (

        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="bg-dark"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

    );
}

