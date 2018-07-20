import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Service extends Component {
  static displayName = 'Service';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page bg-white">
        <Header />
        <div className="p15">
          Service
          Service
          Service
          Service
          Service
        </div>
        <Footer />
      </div>
    );
  }
}
