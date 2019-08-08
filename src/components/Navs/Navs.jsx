import React from 'react';
import { Link } from 'react-router-dom';

import './navs.scss';

const Navs = () => {
  return (
    <nav>
      <img className="logo" alt="Ardor Logo" src={require('../../assets/images/logo.png')} />
      <Link to="/" className="title"> Ardor API Explorer </Link>
      <Link to="/list" className="list-btn">All APIs</Link>
      <a href="https://ardordocs.jelurida.com/API" target="_BLANK" rel="noopener noreferrer" className="doc-btn">Offical Doc</a>
    </nav>
  )
}

export default Navs;
