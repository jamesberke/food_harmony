import React from 'react';
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 3
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="/carousel_images/carousel-bbq.jpg" />
      <img src="/carousel_images/carousel-burger.jpg" />
      <img src="/carousel_images/carousel-dumplings.jpg" />
      <img src="/carousel_images/carousel-pasta.jpg" />
      <img src="/carousel_images/carousel-pizza.jpg" />
      <img src="/carousel_images/carousel-sushi.jpg" />
      <img src="/carousel_images/carousel-tacos.jpg" />
    </Flickity>
  );
}

export default Carousel;