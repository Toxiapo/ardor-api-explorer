import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer> 
        <div className="node">Node: <span><a href="https://testardor.jelurida.com" target="_BLANK" rel="noopener noreferrer">https://testardor.jelurida.com</a></span></div>
        <div className="version">Version: <span>2.2.5</span></div>
        <div className="status">Blockchain Status: <span>UP_TO_DATE</span></div>
        <div className="last-block">Last Block: <span>15295608127704531590</span></div>
        <div className="block">Block: <span>2519681</span></div>
        <div className="network">Network: <span>Testnet</span></div>
      </footer>
    )
  }
}

export default Footer;