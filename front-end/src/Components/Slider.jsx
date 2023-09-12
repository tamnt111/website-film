import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css/bundle";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
      spaceBetween={140}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image} className="container">
          <img src={slide.image} alt={slide.image} />
          <div className="home-text">
            <h1>{slide.title}</h1>
            <span>{slide.subTitle}</span>
            <Link className="bx">
              <AiOutlinePlayCircle />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
