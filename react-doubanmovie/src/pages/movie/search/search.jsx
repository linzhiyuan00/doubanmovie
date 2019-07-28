import React, { Component } from 'react';

class Search extends Component {
  state = {  }
  searchbox(){
    let input = document.getElementById('searchinput')
    let searchvalue = input.value
    console.log(searchvalue)
    return (
      <div></div>
    )
  }
  render() { 
      return ( 
        <div className="search-warpper">
          <input type="text" id="searchinput" value="hahah"/>
          {
            this.searchbox()
          }
        </div>
       );
  }
}

export default Search;