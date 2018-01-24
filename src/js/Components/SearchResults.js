import React from 'react';

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-results">
                    <div className="c-results__item">
                        <img src="http://via.placeholder.com/200x200" />
                    </div>
                </div>

            </div>
        )
    }
}