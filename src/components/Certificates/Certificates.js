import React, {Component} from 'react';
import Certificate from './Certificate';
import udemyLogo from '../../img/udemyLogo.png'

export default class Certificates extends Component {

  render() {
    return (
    <div>
      <section className="bg-dark pb-3" id="certificates" >
        <div className="container text-light">
          <h1 className="display-3">Certificates</h1>
          <div className="m-2 py-2">
            <Certificate img={udemyLogo} text="Modern React with Redux" href="https://www.udemy.com/certificate/UC-C4GRKXHL/"/>
            <Certificate img={udemyLogo} text="Bootstrap 4 From Scratch With 5 Projects" href="https://www.udemy.com/certificate/UC-1F56TODI/"/>
            <Certificate img={udemyLogo} text="Webpack 2: The Complete Developer's Guide" href="https://www.udemy.com/certificate/UC-IL8GX7LK/"/>
            <Certificate img={udemyLogo} text="The Complete ASP.NET MVC 5 Course" href="https://www.udemy.com/certificate/UC-45TQBEPW/"/>
            <Certificate img={udemyLogo} text="Entity Framework in Depth: The Complete Guide" href="https://www.udemy.com/certificate/UC-BPQ2OQ4T/"/>
            <Certificate img={udemyLogo} text="The Complete JavaScript Course: Build a Real-World Project" href="https://www.udemy.com/certificate/UC-PR7265PS/"/>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
