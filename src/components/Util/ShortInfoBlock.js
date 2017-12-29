import React, {Component} from 'react';

export default class ShortInfoBlock extends Component {

  render() {
    return (
      <div className="p-4 lead short-info-block">{this.props.content}</div>
    );
  }
}
