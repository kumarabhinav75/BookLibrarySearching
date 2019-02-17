import React from 'react';
import {Component} from 'react';

class Search extends Component {

  componentDidMount() {
    console.log('INSIDE SEARCH COMPONENT');
  }
  
  setFilter = (e) => {
    if(e.target.value === "Author"){
      this.props.handleSearchByAuthor();
    } else if(e.target.value === 'Name') {
      this.props.handleSearchByBookName();
    }
  } 

  checkValue = (e) => {
    this.props.handleSearchInputChange(e.target.value);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.checkValue} className="Searchbar" />
        <div onChange={this.setFilter}>
          <input type="radio" value="Author" name="FilterSearch"/>Author<br/>
          <input type="radio" value="Name" name="FilterSearch" />Name <br/>
        </div>
      </div>
    )
  }
}

export default Search;