import React from 'react';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <SearchBox />
                { this.props.match.params.query && <SearchResults /> }
            </div>
        )
    }
}