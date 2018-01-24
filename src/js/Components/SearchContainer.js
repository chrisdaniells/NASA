import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <p>SearchContainer</p>
                <Link to="/search">Search</Link>
            </div>
        )
    }
}