import React, {Component} from 'react';


export default class Certificate extends Component {

  render() {
    return (
    <div>
      <a target="_blank" href={this.props.href}>
        <img src={this.props.img} className="img-fluid img-circle" alt="Udemy" style={{height: 50, width: 50}}/><span className="white-link lead">{this.props.text}</span>
      </a>
    </div>
    );
  }
}
