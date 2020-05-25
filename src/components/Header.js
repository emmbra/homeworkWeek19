import React, { Component } from 'react';
import "../styles/Header.css";

// header component to explain details of app to users

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click column carets to filter by columns or use the search box to narrow your results.</p>
      </div>
    )
  }
}
