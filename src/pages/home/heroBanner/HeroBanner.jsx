import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.scss";

import useFetch from "../../../hooks/useFetch"
import Img from "../../..//components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import logo from "../../../assets/movix-logo.svg";


const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming") //we have destructured data and loading from useFetch method which is imported from useFetch.jsx file//
    // console.log(data.results[0].backdrop_path);
    // console.log(data);
    
    useEffect(() => {
          const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * data.results.length)]?.backdrop_path //we multiply by 20 coz we have 20 results coming from api data
            setBackground(bg);
            
                 // also we put ? called as optional chaining  because sometimes we might not get data from server
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" || event.type === "click" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    };

    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} className={'imag'}/>
            </div>}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                {/* we are using ContentWrapper here bcoz we want to wrap the below content
                    according to styling given to ContentWrapper component */}
                <div className="heroBannerContent">
                    {/* <span className="title">Welcome</span> */}
                    <span><img src= {logo} alt="" /></span>
                    <span className="subTitle">Millions if movies, TV shows and people to discover. Explore now.
                    </span> 
                    <div className="searchInput">
                        <input type="text"
                            name='searchQuery'
                            placeholder='Search for a movie or tv show'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={searchQueryHandler}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner;
