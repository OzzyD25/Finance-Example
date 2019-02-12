import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="container">
            <Fade bottom>
              <div className="row text-center">
                <div className="col-md-8 offset-md-2">
                  <h1>ABOUT COMPANY</h1>
                  <h5 className="mb-3">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </strong>
                  </h5>
                </div>
              </div>
             </Fade>
            <Fade bottom>
              <div className="row text-center">
                <div className="col-md-12">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="row text-center space-pad">
                <div className="col-md-3 ">
                  <div className="about-div">
                    <i className="fa fa-camera fa-4x" />
                    <h3>30+ Clients</h3>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="about-div">
                    <i className="fa fa-briefcase fa-4x" />
                    <h3>90+ Projects</h3>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="about-div">
                    <i className="fa fa-desktop fa-4x" />
                    <h3>40+ Offices</h3>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="about-div">
                    <i className="fa fa-folder fa-4x" />
                    <h3>10+ Countries</h3>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
