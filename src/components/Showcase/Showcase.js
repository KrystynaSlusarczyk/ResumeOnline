import React, { Component } from 'react';
import LinkIcon from '../Util/LinkIcon';
import ShortInfoBlock from '../Util/ShortInfoBlock';
import ABOUT from "../../data/About";
import profilePhoto from '../../img/kslusarczyk3.jpg'

export default class Showcase extends Component {
  render() {
    return (
      <div>
        <section id="showcase" >
        <div className="text-white">
          <div className="container" style={{'paddingTop': 80}}>
            <div className="row ">
              <div className="col-md-4 text-center p-3">
                <div className="d-flex flex-column row-hl">
                  <div>
                    <img src={profilePhoto} className="img-fluid img-circle" alt="Cinque Terre"/>
                  </div>
                  <div className="p-4">
                    <LinkIcon href="https://www.linkedin.com/in/krystyna-%C5%9Blusarczyk-634576a4/" icon="fa-linkedin" buttonClass="btn-primary"/>
                    <LinkIcon href="https://github.com/KrystynaSlusarczyk" icon="fa-github" buttonClass="btn-dark"/>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="d-flex flex-column" >
                  <ShortInfoBlock content="Krystyna Ślusarczyk"/>
                  <ShortInfoBlock content="Full Stack .NET Developer"/>
                  <ShortInfoBlock content="slusarczyk.krystyna@gmail.com"/>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-light" id="aboutMe" style={{paddingTop: 45}}>
            <div className="row">
              <div className="col">
                <h1 className="display-3">About me</h1>
                <p className="lead">{ABOUT}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
