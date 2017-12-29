import React, {Component} from 'react';

export default class SkillBar extends Component {

  render() {
    var bgClass = this.GetBackgroundClass();
    return (
      <div className="progress">
        <div className={"progress-bar " + bgClass} style={{flex: this.props.value / 10}}>
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }

  GetBackgroundClass()
  {
    const greenBreakpoint = 7;
    const yellowBreakpoint = 4;

    if(this.props.value >= greenBreakpoint)
    {
      return "bg-success";
    }
    else if(this.props.value >= yellowBreakpoint)
    {
      return "bg-warning";
    }
    else return "bg-danger";
  }
}
