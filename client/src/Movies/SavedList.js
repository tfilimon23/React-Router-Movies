import React, { Component } from 'react';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  navigateHome=(e) =>{
  e.preventDefault();
  this.props.history.push('/');
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div onClick={this.navigateHome} className="home-button">Home</div>
      </div>
    );
  }
}
