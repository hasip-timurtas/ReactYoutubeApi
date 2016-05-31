import React from 'react';

const videoDetail = ({video}) => {
    if (!video) {
        return null;
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item" allowFullScreen>
                </iframe>
            </div>
            <div className="details">
                <h2>{video.snippet.title}</h2>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default videoDetail;