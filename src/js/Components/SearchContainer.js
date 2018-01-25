import React from 'react';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.match.params.query || '',
            filter: this.props.match.params.assettype || 'image',
            data: {}
        }

        this.apiUrl = 'https://images-api.nasa.gov/search';
    }

    getNASAData() {
        if (this.state.query) {
            let url = this.apiUrl + '?q=' + this.props.match.params.query + '&media_type=' + this.state.filter ;
            
            fetch(url)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    this.setState({
                        data: json.collection.items
                    });
                }).catch(function() {
                    console.log('Failed To Collect Data');
                });
        }

    }

    handleQueryChange(event) {
        this.setState({ query: event.currentTarget.value });
    }

    handleFilterCheckbox(event) {
        const target = event.target;

        this.setState(prevState => ({
            filter: target.name
        }));
    }

    handleSearchSubmit() {
        this.getNASAData();   
    }

    componentDidMount() {
        this.getNASAData();
    }

    render() {
        return (
            <div>
                <SearchBox 
                    query={this.state.query}
                    filter={this.state.filter}
                    handleQueryChange={this.handleQueryChange.bind(this)}
                    handleFilterCheckbox={this.handleFilterCheckbox.bind(this)}
                    handleSearchSubmit={this.handleSearchSubmit.bind(this)}
                />
                { this.props.match.params.query && <SearchResults data={this.state.data}/> }
            </div>
        )
    }
}