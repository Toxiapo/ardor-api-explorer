import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navs from '../../components/Navs/Navs';
import './listAll.scss';

import RequestList from '../../constants/requestList.json';

const Search = ({ searchHandler }) => {
  return <input type="text" className="search" placeholder="Search..." onChange={searchHandler}></input>
}

const ScrollToTop = ({ scrollTopHandler }) => {
  return <button className="scroll" onClick={scrollTopHandler}>Top</button>
}

class ListAll extends Component {
  constructor(props) {
    super(props);

    const requestList = Object.keys(RequestList);
    
    this.state = {
      APIs: requestList,
      total: requestList.length
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.scrollTopHandler = this.scrollTopHandler.bind(this);
  }

  searchHandler(event) {
    const rawList = Object.keys(RequestList);

    if (event.target.value.length > 0) {
      const inputValue = event.target.value.toLowerCase();
      const filteredList = rawList.filter(value => value.toLowerCase().includes(inputValue));

      this.setState({ APIs: filteredList });
    } else {
      this.setState({ APIs: rawList });
    }
  }

  scrollTopHandler() {
    window.scrollTo(0, 0);
  }

  render() {
    const { APIs, total } = this.state;
    return (
      <div className="root-container">
        <Navs />
        <div className="all-container">
          <Search searchHandler={this.searchHandler} />
          <h4>Total: {total}</h4>
          <div className="list">
            {APIs.map((item, key) => <Link to={`/requestDetail/${item}`} key={key}>{item}</Link>)}
          </div>
          <ScrollToTop scrollTopHandler={this.scrollTopHandler} />
        </div>
      </div>
    )
  }
}

export default ListAll;