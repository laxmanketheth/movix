import { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../detailsBanner/Playbtn";

const OfficialVideos = ({data}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

// console.log(data);
    return (
        <div className="videosSection">

            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>

                    <div className="videos">
                        {data?.results?.map((video) => 
                            <div key={video.id}
                                className="videoItem"
                                onClick={() => {
                                    setVideoId(video.key)
                                    setShow(true)
                                }}
                                >
                                    <div className="videoThumbnail">
                                        {/* below is the static url searched from google for accessing poster */}
                                        <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                                        <PlayIcon/>
                                    </div>
                                    <div className="videoTitle">{video.name}</div>
                                </div>
                        )}
                    </div>
                

            </ContentWrapper>
          
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};


export default OfficialVideos;
