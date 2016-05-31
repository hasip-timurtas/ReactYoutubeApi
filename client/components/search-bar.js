import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //return <input type="text" onChange={event => console.log(event.target.value)}/>;
        return (<div className="search-bar">
                <input type="text"
                       onChange={event => this.props.onSearchChange(event.target.value)}
                       placeholder="Search"

                />
            </div>
        );
    }
}
