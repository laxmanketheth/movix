import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import OfficialVideos from './officialVideos/OfficialVideos';
import Recommendation from './carousels/Recommendation';
import Similar from './carousels/Similar';


const Details = () => {

    const { mediaType, id } = useParams();
    //the useParams method is used to access the URL parameters of 
    //the current page where the Details component is rendered and 
    //then we destructure mediaType and id from it  //

    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    // console.log(credits);
    return (
        <div >
            <DetailsBanner video={data?.results?.[0]}
                crew={credits?.crew}
            />
            <Cast data={credits?.cast} />
            <OfficialVideos data={data} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    )
}

export default Details;
