import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchContainer extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="c-searchresults">
                {Object.keys(this.props.data).map((key) => {
                    let item = this.props.data[key];
                    if (item.data[0].media_type=="image") {
                        return <Link 
                                    to={"/asset/" + item.data[0].nasa_id} 
                                    className="c-searchresults__item" key={key}
                                >
                                    <div className="c-searchresults__image-wrapper">
                                        <img 
                                            src={item.links[0].href}
                                            className="c-searchresults__image" 
                                        />
                                    </div>
                                </Link>
                    } else if (item.data[0].media_type=="audio") {
                        return <div className="c-searchresults__item c-searchresults__item--audio" key={key}>
                                    <p className="c-searchresults__item-title">{item.data[0].title}</p>
                                    <p className="c-searchresults__item-description">{item.data[0].description.substring(0,200) + '...'}</p>
                                    <Link to={"/asset/" + item.data[0].nasa_id} state={{data: item }}>Go to Item</Link>
                                </div>
                    }

                })}
            </div>
        )
    }
}