import React from 'react';

<<<<<<< HEAD
class Search extends React.Component {
=======
export default class Search extends React.Component {

>>>>>>> f5a9ecab0d2b8e9dd19c9be17ef960898711ad98
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  //create click event
  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }
  render () {
    return (
      <div className="search-bar form-inline">
        <input
        className="form-control"
        type='text'
        value={this.state.value}
        onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = Search;
