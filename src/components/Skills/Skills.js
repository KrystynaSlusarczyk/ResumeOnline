import React, {Component} from 'react';
import SkillBar from './SkillBar';
import SKILLS from "../../data/SKILLS";

export default class Skills extends Component {

  render() {
    return (
    <div>
      <section id="skills" >
      <div className="container text-light">
        <h1 className="display-3">Skills</h1>
        <div className="m-2 py-2">
          {
            SKILLS.map((item) => <SkillBar key={item.name} text={item.name} value={item.value}/>)
          }
        </div>
      </div>
    </section>
    </div>
    );
  }
}
