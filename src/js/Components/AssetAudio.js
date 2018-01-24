import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class AssetAudio extends React.Component {
    render() {
        return(
            <div className="c-asset">
                <h1 className="c-asset__title">{this.props.title}</h1>
                <p className="c-asset__description">{this.props.description}</p>
                <ReactAudioPlayer
                    src={this.props.filePath}
                    controls
                />
            </div>
        )
    }
}