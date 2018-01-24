import React from 'react';
import { Media, Player, controls } from 'react-media-player';
const { PlayPause, MuteUnmute, } = controls;

export default class AssetAudio extends React.Component {
    render() {
        return(
            <div className="c-asset">
                <h1 className="c-asset__title">{this.props.title}</h1>
                <p className="c-asset__description">{this.props.description}</p>
                <Media>
                    <div className="c-media">
                        <div className="media-player">
                            <Player src={this.props.filePath}/>
                        </div>
                        <div className="c-media__controls">
                            <PlayPause/>
                            <MuteUnmute/>
                        </div>
                    </div>
                </Media>
            </div>
        )
    }
}