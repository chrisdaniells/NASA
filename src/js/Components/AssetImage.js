import React from 'react';

export default class AssetImage extends React.Component {
    render() {
        return(
            <div className="c-asset">
                <h1 className="c-asset__title">{this.props.title}</h1>
                <p className="c-asset__description">{this.props.description}</p>
                <img src={this.props.filePath} className="c-asset__image" />
            </div>
        )
    }
}