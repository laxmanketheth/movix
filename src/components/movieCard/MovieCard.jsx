// import React, { Component } from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux';
import Img from "../lazyLoadImage/Img";
import './style.scss';
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import PosterFallback from "../../assets/no-poster.png";
import Slider from "react-slick";


const MovieCard = ({ data, endpoint }) => {
    // console.log(data);

    const { url } = useSelector((state) => state.home);
    // console.log(url);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;

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
                <Slider className="slider">
                    <div className="container">
                        <div
                            className="cardItem"
                            onClick={() => {
                                navigate(`/${data.media_type || endpoint}/${data.id}`)
                            }}>
                            <Img src={posterUrl} className="cardimage" />
                            <div className="card-item-body">
                                <h3>{data.original_title || data.name}</h3>
                                <p>{
                                    dayjs(data.release_date || data.first_air_date).format("MMM, D, YYYY")}</p>
                                {/* dayjs helps in formatting date */}
                            </div>
                        </div>
                    </div>

                </Slider>
            </ContentWrapper>
        </div>
    )
}

export default MovieCard;
