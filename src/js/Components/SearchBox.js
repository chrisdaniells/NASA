import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-searchbox">
                    <input type="text" className="c-searchbox__input" />
                    <button className="c-searchbox__button">Search</button>
                    <div className="c-searchbox__filter">
                        <label><input type="checkbox" className="c-searchbox__checkbox" />Images</label>
                        <label><input type="checkbox" className="c-searchbox__checkbox" />Audio</label>
                    </div>
                </div>

            </div>
        )
    }
}