import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDrqtjT9yRRjf1uZa1kREaKlfoeZUoVFyc';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>)
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
