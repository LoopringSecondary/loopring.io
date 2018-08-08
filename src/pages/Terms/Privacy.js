import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Privacy extends Component {
  static displayName = 'Privacy';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <Header />
        <div className="p15">
          Privacy
          Privacy
          Privacy
          Privacy
          Privacy
        </div>
        <Footer />
      </div>
    );
  }
}
