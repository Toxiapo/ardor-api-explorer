import React, { Component } from 'react';
import Navs from '../../components/Navs/Navs';

import './requestDetail.scss';

import { getRequest, postRequest } from '../../Api'

import RequestList from '../../constants/requestList.json';

class RequestDetail extends Component {
  constructor(props) {
    super(props);

    const path = props.location.pathname;
    const request = path.split('/')[2];
    const apiExist = RequestList.hasOwnProperty(request);

    this.state = {
      request,
      apiExist,
      apiMethod: '',
      httpResponse: '',
      requestFields: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.preRef = React.createRef();
  }

  componentDidMount() {
    if (this.state.apiExist) {
      const { request } = this.state;
      this.setState({
        requestFields: RequestList[request].fields,
        apiMethod: RequestList[request].method
      })
    }
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const method = this.state.apiMethod;
    const request = this.state.request

    let data = '&';
    let formData = new FormData(event.target);

    for (var [key, value] of formData.entries()) {
      if (value.length > 0) {
        data = data + key + "=" + value + "&"
      }
    }

    try {
      let response;

      if (method === 'GET') {
        response = await getRequest(request, data);
      } else {
        response = await postRequest(request, data);
      }

      if (response && response.status === 200) {
        let url = `https://testardor.jelurida.com/nxt?requestType=${request}${data}`;
        if (url.endsWith("&")) { url = url.slice(0, -1) };

        this.setState({
          httpResponse: JSON.stringify(response.data, undefined, 2),
          url
        });

        window.scrollTo(0, this.preRef.current.offsetTop);
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { httpResponse, request, apiExist, apiMethod, requestFields, url } = this.state;

    return (
      <div className="root-container">
        <Navs />
        <main className="detail-container">
          {apiExist
            ?
            <div id="fields">
              <h3>{request} <small><em>{apiMethod}</em></small></h3>
              <form onSubmit={this.handleFormSubmit}>
                {Object.keys(requestFields).map((key, index) => {
                  return (
                    <div key={index} className={`field`}>
                      <label htmlFor={key}>{key}:</label>
                      <input id={key} name={key} type="text" />
                    </div>
                  )
                })}
                <button type="submit" id="api-call"> Submit </button>
              </form>
            </div>
            :
            <div id="error">API not found</div>
          }
          {httpResponse.length > 0 &&
            <pre ref={this.preRef}>
              {httpResponse}
              { url && <a href={url} target="_BLANK" rel="noopener noreferrer">Open in new tab</a> }
            </pre>
          }
        </main>
      </div>
    )
  }
}

export default RequestDetail;
