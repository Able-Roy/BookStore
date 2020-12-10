import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselSlider = () => {
    return (
      <Carousel>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1280x256" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
}

export default CarouselSlider;