import React, { Component } from 'react';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  // function navigateHome(e) {
  //   e.preventDefault();
  //   props.history.push('/');
  // };

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button">Home</div>
      </div>
    );
  }
}
