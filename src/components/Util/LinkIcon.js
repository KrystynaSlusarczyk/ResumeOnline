import React, {Component} from 'react';

export default class LinkIcon extends Component {

  render() {
    return (
      <a target="_blank"
         href={this.props.href}
         className={"mx-1 btn-whiteBordered btn " + this.props.buttonClass +" p-1 fa-clickable"}>
         <i className={"fa " + this.props.icon} aria-hidden="true" style={{color: '#white'}}></i>
       </a>
    );
  }

}
