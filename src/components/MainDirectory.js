import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
      
        <div className="container" id="home">
          <div className="row text-center">
            <div className="col-md-3 head-main">
              <i className="fa fa-globe color-blue" />
              <AnchorLink offset='-100' href="#services"><h3>SERVICES</h3></AnchorLink>
            </div>
            <div className="col-md-3 head-main">
              <i class="far fa-file-image color-blue" />
              <AnchorLink offset='-200' href="#free-text"><h3>FREE SPACE</h3></AnchorLink>
            </div>
            <div className="col-md-3 head-main">
              <i className="fas fa-comments color-blue" />
              <AnchorLink offset='-100' href="#team"><h3>OUR TEAM</h3></AnchorLink>
            </div>
            <div className="col-md-3 head-main">
              <i className="fas fa-envelope color-blue" />
              <AnchorLink offset='-100' href="#contact"><h3>CONTACT</h3></AnchorLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
