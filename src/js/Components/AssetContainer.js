import React from 'react';

import AssetImage from './AssetImage';
import AssetAudio from './AssetAudio';

export default class AssetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = 'https://images-api.nasa.gov/';

        this.state = {
            title: '',
            description: '',
            filePath: '',
        }
    }
    componentDidMount() {
        this.getAssetData();
    }
    getAssetData() {
        let url = this.apiUrl + 'search?q=' + this.props.match.params.nasaid;

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this.setState({
                    title: json.collection.items[0].data[0].title,
                    description: json.collection.items[0].data[0].description,
                    filePath: this.props.match.params.type == "image" ? json.collection.items[0].links[0].href : ''
                });
            }).catch(function(ex) {
                console.log('Failed To Collect Data');
            });

        if (this.props.match.params.type == "audio") {
            this.getAudioFiles();
        }
    }

    getAudioFiles() {
        let url = this.apiUrl + '/asset/' + this.props.match.params.nasaid;

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json.collection.items[0].href);
                this.setState({
                    filePath:  encodeURI(json.collection.items[0].href)
                });
            }).catch(function(ex) {
                console.log('Failed To Collect Data');
            });
    }
    
    render() {
        if (this.props.match.params.type == "image") {
            return (
                <AssetImage 
                    title={this.state.title}
                    description={this.state.description}
                    filePath={this.state.filePath}
                />
            )

        } else if (this.props.match.params.type == "audio") {
            return(
                <AssetAudio
                    title={this.state.title}
                    description={this.state.description}
                    filePath={this.state.filePath}
                />
            )
        }
    }
}