import React from 'react';

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-searchbox">
                    <input type="text" className="c-searchbox__input" placeholder="Enter Search Term for Lift Off"/>
                    <button className="c-searchbox__button">
                        <img src="https://nasa.gov/sites/all/themes/custom/nasatwo/images/search.svg"
                            className="c-searchbox__button-icon" />
                    </button>
                    <div className="c-searchbox__filter">
                        <label className="c-searchbox__label">
                            <input type="checkbox" className="c-searchbox__checkbox" />Images
                        </label>
                        <label className="c-searchbox__label">
                            <input type="checkbox" className="c-searchbox__checkbox" />Audio
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}