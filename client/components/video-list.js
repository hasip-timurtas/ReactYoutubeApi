import React, {Component} from 'react';
import VideoListItem from './video-list-item';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var videoData = this.props.videos.map(video => {
            return <VideoListItem key={video.id.videoId} video={video} />;

        });

        return (
            <ul className="col-md-4 list-group">
                {videoData}
            </ul>
        );
    }
}
