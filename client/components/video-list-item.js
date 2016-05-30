import React, {Component} from 'react';

export default class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.video.snippet.title}</li>
        );
    }
}
