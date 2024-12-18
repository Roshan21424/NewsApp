import React, { Component } from 'react'

//defing a class component called NewsItem 
export default class NewsItems extends Component {
  //calling the parent container
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          {/* setting the image url */}
          <img src={this.props.urlimg} className="card-img-top" alt="..."></img>
          <div className="card-body">
            {/* setting the title and the description */}
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.url} className="btn btn-primary">go to news</a>
          </div>
        </div>
      </div>
    )
  }
}
