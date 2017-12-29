import React, {Component} from 'react';
import TimelineItem from './TimelineItem';
import {setTimelinePopups} from '../../util/Timeline'

export default class ExperienceAndEducation extends Component {

  componentWillMount()
  {
    setTimelinePopups();
  }

  render() {
    return (
      <div>
        <section className="bg-dark" id="experienceAndEducation">
          <div className="container text-light">
            <h1 className="display-3">Experience & Education</h1>
            <div className="mx-auto text-center timeline">
              <TimelineItem id="motabi" color="rgb(239,126,18)" date="May 2016 - now" role="Motabi - Full Stack .NET Developer"/>
              <TimelineItem id="nokia" color="rgb(18,65,145)" date="November 2014 - April 2016" role="Nokia Networks - C++ Software Engineer"/>
              <TimelineItem id="vsoft" color="rgb(41,159,209)" date="November 2013 - June 2014" role="VSoft - .NET Developer"/>
              <TimelineItem id="vsoftInternship" color="rgb(41,159,209)" date="August 2013 - September 2013" role="VSoft - .NET Developer - internship"/>
              <TimelineItem id="jagiellonianUniversityMastersDegree" color="rgb(41,159,209)" date="October 2013 - June 2015" role="Jagiellonian University in Cracow - Master's Degree"/>
              <TimelineItem id="jagiellonianUniversityBachelorsDegree" color="rgb(41,159,209)" date="October 2010 - June 2013" role="Jagiellonian University in Cracow - Bachelor's Degree"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
