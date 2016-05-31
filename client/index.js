import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyDrqtjT9yRRjf1uZa1kREaKlfoeZUoVFyc';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: [], selectedVideo: null};

        YTSearch({key: API_KEY, term: 'meteorjs'}, (videos) => {
            this.setState({videos, selectedVideo: videos[0]});
        });
    }

    onSearchChange(text) {
        YTSearch({key: API_KEY, term: text}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.onSearchChange(term)
        }, 400);

        return (
            <div>
                <SearchBar
                    onSearchChange={videoSearch}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>


            </div>)
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});

