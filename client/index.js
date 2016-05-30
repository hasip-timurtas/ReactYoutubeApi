import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';


const API_KEY = 'AIzaSyDrqtjT9yRRjf1uZa1kREaKlfoeZUoVFyc';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
            console.log(videos);
        });


    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>)
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});

