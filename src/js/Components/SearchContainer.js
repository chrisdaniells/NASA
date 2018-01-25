import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.match.params.query || '',
            filters: {
                image: true,
                audio: false
            },
            data: {}
        }

        this.apiUrl = 'https://images-api.nasa.gov/search';
    }

    getNASAData() {
        if (this.props.match.params.query) {
            let filter;
            if (this.state.filters.image || this.state.filters.audio) {
                filter = this.state.filters.image ? 'image' : 'audio';
            }
            let url = this.apiUrl + '?q=' + this.state.query + (filter ? '&media_type=' + filter : '');
            
            fetch(url)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    this.setState({
                        data: json.collection.items
                    })
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
            filters: {
                image: target.name=='image',
                audio: target.name=='audio',
            }
        }));
    }
    handleSearchSubmit() {
        this.getNASAData();
        this.props.history.push('/search/' + this.state.query);
    }

    componentDidMount() {
        this.getNASAData();
    }

    render() {
        return (
            <div>
                <SearchBox 
                    query={this.state.query}
                    filters={this.state.filters}
                    handleQueryChange={this.handleQueryChange.bind(this)}
                    handleFilterCheckbox={this.handleFilterCheckbox.bind(this)}
                    handleSearchSubmit={this.handleSearchSubmit.bind(this)}
                />
                { this.props.match.params.query && <SearchResults data={this.state.data}/> }
            </div>
        )
    }
}