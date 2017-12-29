import React, {Component} from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Showcase from './Showcase/Showcase';
import ExperienceAndEducation from './ExperienceAndEducation/ExperienceAndEducation';
import Skills from './Skills/Skills';
import Certificates from './Certificates/Certificates';
import ContactMe from './ContactMe/ContactMe';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Showcase/>
        <ExperienceAndEducation/>
        <Skills/>
        <Certificates/>
        <ContactMe/>
      </div>
    );
  }
}
