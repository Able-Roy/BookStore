import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselSlider = () => {
    return (
      <Carousel showThumbs={false}>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
        </div>
      </Carousel>
    );
}

export default CarouselSlider;