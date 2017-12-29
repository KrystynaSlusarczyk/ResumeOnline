import React, {Component} from 'react';
import EXPERIENCE_AND_EDUCATION from "../../data/ExperienceAndEducation";

export default class TimelineItem extends Component {
  render() {
  var listItems = EXPERIENCE_AND_EDUCATION[this.props.id];

    return (
      <div className="timeline-item logo" id={this.props.id}>
        <div className="timeline-content ">
          <div className="timeline-content-header">
            <span className=" font-weight-bold" style={{color: this.props.color}}>{this.props.role}</span>
          </div>
          <div className="text-muted">
            <i className="fa fa-calendar"></i>
            <span style={{marginLeft: 5}}>{this.props.date}</span>
          </div>
          <div>
            <ul>
              {listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
