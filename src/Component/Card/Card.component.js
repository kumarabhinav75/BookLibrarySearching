import React from 'react';
import {Component} from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Author: {this.props.Author}</li>
          <li>id: {this.props.id}</li>
          <li>Name: {this.props.Name}</li>
        </ul>
      </div>
    )
  }
}

export default Card;