import React, {Component} from 'react';
import NavigationBarLink from './NavigationBarLink';

export default class NavigationBar extends Component {

  constructor()
  {
    super();
    this.setActive = this.setActive.bind(this);
    this.state = {
      activeTab: "#aboutMe",
      allTabs: [
        {
          href: "#aboutMe",
          text: "About me"
        }, {
          href: "#experienceAndEducation",
          text: "Experience & Education"
        },
        {
          href: "#skills",
          text: "Skills"
        },
        {
          href: "#certificates",
          text: "Certificates"
        },
        {
          href: "#contactMe",
          text: "Contact me"
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
          <div className="container">
            <span onClick={() => {$(window).scrollTop(0)}} className="navbar-brand">Krystyna Ślusarczyk</span>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#topNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="topNavbar">
              <ul className="navbar-nav ml-auto">
                {this.renderTabs()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  setActive(tab)
  {
    this.setState({active: tab});
  }

  renderTabs()
  {
    return this.state.allTabs.map((tab) =>
    <NavigationBarLink
       setActive={this.setActive}
       href={tab.href}
       text={tab.text}
       key={tab.href}
       active={this.state.active}/>);
  }
}
