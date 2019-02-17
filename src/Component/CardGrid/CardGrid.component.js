import React from 'react';
import { Component } from 'react';
import Card from '../Card/Card.component';
const axios = require('axios');

class CardGrid extends Component {

  componentDidMount() {
    return axios.get('https://api.myjson.com/bins/187p1u').then(response =>{
       this.props.initializeStoreWithBooks(response.data.books)}
    );


  }
  render() {
    console.log(this.props);
    if(this.props.booksData !== undefined){
      return (
          this.props.booksData.map((book) =>
            <Card
              Author={book.Author}
              id={book.id}
              Name={book.Name}
            />
          )
      )
    } else {
      return ('NO RESULT');
    }
  }
}

export default CardGrid;