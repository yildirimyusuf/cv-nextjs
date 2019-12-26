import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { children } = this.props;
    return <div className="w-100 rounded overflow-hidden shadow-lg">{children}</div>;
  }
}
