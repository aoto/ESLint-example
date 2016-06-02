import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Foo extends Component {
  render() {
    if (!this.props.foo) {
      return null;
    }
    return <div>{this.props.foo}</div>;
  }
}

Foo.propTypes = {
  foo: React.PropTypes.string
};

ReactDOM.render(document.body, Foo);
