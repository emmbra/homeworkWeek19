import React, { Component } from 'react';
import "../styles/Header.css";

// header component to explain details of app to users

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click 'Name' column to sort by ascending and descending order, or use the search box to narrow your results.</p>
      </div>
    )
  }
}
