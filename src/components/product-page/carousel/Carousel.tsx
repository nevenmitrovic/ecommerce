import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.style.css";
import Slider from "react-slick";

export interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => {
        return (
          <div key={img} className="carousel-img-container">
            <img
              className="carousel-img"
              src={img}
              alt={`product-image-${index}`}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
