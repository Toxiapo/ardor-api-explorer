import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';
import Navs from '../../components/Navs/Navs';

import  popularRequests from '../../constants/popularRequests'; 

class Home extends Component {
  render() { 
    return (
      <div className="root-container">
        <Navs />
        <main className="home-container">
          <div className="content">
            <SearchForm />
            <div className="popular">
              {popularRequests.map((value, index) => <Link to={{ pathname: `/requestDetail/${value}`, request: value }} className="item" key={index} >{value}</Link>)}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;