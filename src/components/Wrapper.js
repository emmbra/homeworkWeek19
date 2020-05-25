import React from 'react';
import "../styles/Wrapper.css";

// component used to wrap header and main component in app.js

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;
