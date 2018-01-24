import React from 'react';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.match.params.query || '',
            filters: {
                images: false,
                audio: false
            }
        }
    }

    handleQueryChange(event) {
        this.setState({ query: event.currentTarget.value });
    }
    handleFilterCheckbox(event) {
        const target = event.target;
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                [target.name]: target.checked
            }
        }));
    }

    render() {
        return (
            <div>
                <SearchBox 
                    query={this.state.query}
                    filters={this.state.filters}
                    handleQueryChange={this.handleQueryChange.bind(this)}
                    handleFilterCheckbox={this.handleFilterCheckbox.bind(this)}
                />
                { this.props.match.params.query && <SearchResults /> }
            </div>
        )
    }
}