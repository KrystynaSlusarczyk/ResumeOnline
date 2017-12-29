import React, {Component} from 'react';

export default class NavigationBarLink extends Component {
  render() {
    var active = this.props.active === this.props.href ? "active" : "";
    return (
      <li className="nav-item" >
        <a href={this.props.href} className={"nav-link " + active} onClick={() => this.props.setActive(this.props.href)}>{this.props.text}</a>
      </li>
    );
  }
}
