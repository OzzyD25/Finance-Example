import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Image Split Start */}
        <div className="img-split-1 d-flex justify-content-center">
          <div className="container">
            <div className="row">
              <div class="col-md-8 offset-md-3 split-text-1">
                <span>Watch Our Showreel</span><a class="popup-youtube btn" href=""><span><i class="far fa-play-circle fa-3x"></i></span></a><span>With Us</span>
              </div>
            </div>
          </div>
        </div>
      {/* Image Split End */}
        <section id="services">
          <div className="container">
            <Fade bottom>
              <div className="row text-center">
                <div className="col-md-8 mb-3 offset-md-2">
                  <h1>What We Do</h1>
                  <h4>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio.</strong>
                  </h4>
                </div>
              </div>
            </Fade>
            <div className="row space-pad">
              <Fade left>
                <div className="col-md-3">
                  <div className="service-div text-center">
                    <i className="fa fa-credit-card fa-4x mb-3" />
                    <h3>We Have?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.</p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                  </p>
                  <p className="text-center service-buttons">
                    <button type="button" className="btn btn-outline-info service-btn">Service 1</button>
                    <button type="button" className="btn btn-outline-info service-btn">Service 2</button>
                    <button type="button" className="btn btn-outline-info service-btn">Service 3</button>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-3">
                  <div className="service-div text-center">
                    <i className="fas fa-truck fa-4x mb-3" />
                    <h3>We Deliver?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
