import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navs from '../../components/Navs/Navs';
import "./Home.scss"

import  popularRequests from '../../constants/popularRequests'; 

class Home extends Component { 
  render() { 
    let recents = localStorage.getItem('recent') || "{}";
    recents = JSON.parse(recents); 
    const recentSearches = Object.keys(recents).length > 0 ? Object.keys(recents) : popularRequests;
    
    return (
      <div className="root-container">
        <Navs />
        <main className="home-container">
          <div className="content">
            <h1>Recent Request</h1>
            <div className="popular">
              {recentSearches.map((value, index) => <Link to={{ pathname: `/requestDetail/${value}`, request: value }} className="item" key={index} >{value}</Link>)}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;