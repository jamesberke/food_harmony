import React from "react";
import "./carousel.css";
import Flickity from "react-flickity-component";
import bbq from "./carousel_images/carousel-bbq.jpg";
import burger from "./carousel_images/carousel-burger.jpg";
import dumplings from "./carousel_images/carousel-dumplings.jpg";
import pasta from "./carousel_images/carousel-pasta.jpg";
import pizza from "./carousel_images/carousel-pizza.jpg";
import sushi from "./carousel_images/carousel-sushi.jpg";
import tacos from "./carousel_images/carousel-tacos.jpg";

const flickityOptions = {
	initialIndex: 3,
	freeScroll: true,
	wrapAround: true,
	autoPlay: 1000,
	contain: true,
	// prevNextButtons: false,
// pageDots: false


};

function Carousel() {
	return (
		<Flickity
			className={"carousel"}
			elementType="section"
			options={flickityOptions}
			disableImagesLoaded={false}
			reloadOnUpdate
			static
		>
			<img src={bbq} className="carousel-image" />
			<img src={burger} className="carousel-image" />
			<img src={dumplings} className="carousel-image" />
			<img src={pasta} className="carousel-image" />
			<img src={pizza} className="carousel-image" />
			<img src={sushi} className="carousel-image" />
			<img src={tacos} className="carousel-image" />
		</Flickity>
	);
}

export default Carousel;
