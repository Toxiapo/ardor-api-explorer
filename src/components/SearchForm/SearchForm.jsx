import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './searchForm.scss'

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // We want the page to work even when the user types the full path in the URL
    // *<Redirect/> works too
    this.props.history.push(`/requestDetail/${this.state.search}`)
  }

  handleOnChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() { 
    return (
      <div className="search-container">
        <h1>Search Requests</h1>
        <form onSubmit={this.handleSubmit}>
          <input required onChange={this.handleOnChange} name="requestType" type="text" placeholder="getAccount" />
          <input type="submit" value="search" />
        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);