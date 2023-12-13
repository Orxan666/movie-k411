import React, { useEffect, useState } from "react";
import "./hero-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import apiConfig from "../../api/apiConfig";
const HeroSlider = () => {
  const [movies, setMovies] = useState([]);
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a5531f013824e2e60d416bd5e88fade9"
  )
    .then((response) => response.json())
    .then((response) => setMovies(response));

  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={0}
    >
      {movies.length !== 0 ? (
        movies.results.map((movie) => (
          <SwiperSlide>
            <div
            className="slider-item"
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  movie.backdrop_path
                )})`,
              }}
            >
                <div className="slider-content">
                    <h3>{movie.original_title}</h3>
                </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <h1>Yuklenir</h1>
      )}
    </Swiper>
  );
};

export default HeroSlider;
