import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div className="c-searchresults">
        {
            Object.keys(this.props.data).map((key) => {
                const item = this.props.data[key]
                if (item.data[0].media_type == 'image') {
                    return (
                    <Link
                        to={`/asset/image/${item.data[0].nasa_id}`}
                        className="c-searchresults__item"
                        key={item.data[0].title + key}
                    >
                        <div className="c-searchresults__image-wrapper">
                            <button
                                onClick={(event) => this.props.handleFavouriteClick(event, item.data[0].nasa_id)}
                            >
                                {
                                    this.props.favourites.find(id => id === item.data[0].nasa_id)
                                        ? 'Unfavourite'
                                        : 'Favourite'
                                }
                            </button>
                            <img
                                src={item.links[0].href}
                                className="c-searchresults__image"
                            />
                        </div>
                    </Link>)
                }
            })
        }
      </div>
    )
  }
}
