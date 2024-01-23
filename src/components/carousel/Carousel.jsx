// import React, { Component } from "react";
import Slider from "react-slick";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux';
import Img from "../lazyLoadImage/Img";
import "./style.scss"
import dayjs from "dayjs";
import CircleRating from "../circleRating/CircleRating";
import { useNavigate } from "react-router-dom";
import NoPoster from "../../assets/no-poster.png"


const Carousel = ({ data, loading, endpoint, title }) => {
  // console.log(data);

  const { url } = useSelector((state) => state.home);
  // console.log(url);
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          arrows: false //this arrow property hides arrows at smaller screen sizes
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false //this arrow property hides arrows at smaller screen sizes
        }
      }
    ]
  };
  return (
    <div>
      <ContentWrapper>
        <div className="titleHeading">
          {data && data.length > 0 && title && <div className="carouselTitle">{title}</div>}
          {/* above line will only be executed when the title is true */}
        </div>


        <Slider {...settings} className="slider">
          {data?.map((movie) => {
            const posterUrl =  movie.poster_path 
                              ? url.poster + movie.poster_path
                              : NoPoster

            return (
              <div key={movie.id}
                className="card"
                onClick={() => {
                  navigate(`/${movie.media_type || endpoint}/${movie.id}`)
                }}
              >
                <Img src={posterUrl} className="image" />
                <CircleRating rating={movie.vote_average.toFixed(1)} />
                <div className="card-body">
                  <h3>{movie.original_title || movie.name}</h3>
                  <p>{
                    dayjs(movie.release_date || movie.first_air_date).format("MMM, D, YYYY")}</p>
                  {/* dayjs helps in formatting date */}
                </div>
              </div>
            )
          })}

        </Slider>
      </ContentWrapper>
    </div>
  )
}

export default Carousel;
