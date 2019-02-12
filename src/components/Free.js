import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';

export default class Free extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="free-text">
          <div className="container">
          <Flip bottom>
            <div className="row text-center mb-3">
              <div className="col-md-8 offset-md-2">
                <h1>FREE TEXT SECTION</h1>
                <h4>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                  </strong>
                </h4>
              </div>
            </div>
            </Flip>
            <Flip bottom>
            <div className="row text-center space-pad">
              <div className="col-md-6">
                <div className="free-div">
                  <h3>Text/Image Here</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="free-div">
                  <h3>Text/Image Here</h3>
                </div>
              </div>
              <h5 className="col-md-8 offset-md-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Lorem ipsum dolor sit amet, consectetur
              </h5>
            </div>
            </Flip>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
