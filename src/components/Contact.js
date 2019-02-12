import React, { Component } from 'react';
import Footer from './Footer';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Image Split Start */}
        <div className="img-split-2 d-flex">
          <div className="container">
            <div className="row">
              <div class="col-md-8 offset-md-4 split-text-2">
                <p>Subscribe To Our Newsletter</p>
                <form className="d-flex">
                  <div className="form-input">
                    <input placeholder="Your email here..." type="email" />
                  </div>
                  <button type="submit" disabled>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* Image Split End */}
        <section id="contact">
          <div className="container">
            <div className="row text-center mb-4">
              <div className="col-md-8 offset-md-2">
                <h1>CONTACT</h1>
                <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc
                  id posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 contact-cls mt-2">
                <h3>OUR LOCATION</h3>
                <div>
                  <span><i className="fa fa-home" />&nbsp;Address: London, N14 6LZ</span>
                  <br />
                  <span><i class="fab fa-linkedin" />&nbsp; LinkedIn: Your Company</span>
                  <br />
                  <span><i className="fa fa-envelope" />&nbsp; E-Mail: indo@yourdomain.com</span>
                  <br />
                  <span><i className="fa fa-phone" />&nbsp; Call: +50-987-009-0</span>
                  <br />
                  <span><i className="fa fa-globe" />&nbsp; Web: www.yourdomain.com</span>
                  <br /> <br />
                  <button type="submit" className="btn btn-primary mb-2">Request Quotation</button>
                </div>
              </div>
              <div className="col-md-7">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio.</p>
                <form>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" required="required" placeholder="Name"></input>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" required="required" placeholder="Email address"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div class="form-group">
                        <textarea id="message" required="required" className="form-control" rows="4" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Submit Request</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}
