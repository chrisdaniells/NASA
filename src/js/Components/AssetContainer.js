import React from 'react';
import AssetItem from './AssetItem';

export default class AssetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = 'https://images-api.nasa.gov/search?nasa_id=';

        this.state = {
            data: {
                title: '',
                description: '',
                imagePath: ''
            }
        }
    }
    componentDidMount() {
        this.getAssetData();
    }
    getAssetData() {
        let url = this.apiUrl + this.props.match.params.nasaid
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this.setState({
                    data: {
                        title: json.collection.items[0].data[0].title,
                        description: json.collection.items[0].data[0].description,
                        imagePath: json.collection.items[0].links[0].href
                    }
                })
            }).catch(function(ex) {
                console.log('Failed To Collect Data');
            });
    }
    
    render() {
        return (
            <AssetItem 
                title={this.state.data.title}
                description={this.state.data.description}
                imagePath={this.state.data.imagePath}
            />
        )
    }
}