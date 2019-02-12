import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


export default class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="team">
          <div className="container">
            <div className="row text-center">
              <Fade bottom>
                <div className="col-md-8 mb-3 offset-md-2">
                  <h1>Our Leadership Team</h1>
                  <p>Our Executive Committee combines decades of industry experience and expertise. Find out more about the people who define the direction of our business. For information about our Board.</p>
                </div>
              </Fade>
            </div>
            <div className="row text-center">
              <Fade bottom>
                <div className="col-md-4 team-card">
                  <img src="img/8.jpg" />
                  <div className="team-text">
                    <h3>Rosa</h3>
                    <h5>CFO of Luxington Estate Monumentary</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consetetur,adipisivelit, sed quia non numquam eius modi tempora incidun.</p>
                    {/* <div class="social-icons">
                      <ul>
                        <a href="#"><li><span><i class="fab fa-twitter-square"></i></span></li></a>
                        <a href="#"><li><span><i class="fab fa-facebook-square"></i></span></li></a>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 team-card">
                  <img src="img/9.jpg" />
                  <div className="team-text">
                    <h3>Susan</h3>
                    <h5>CFO of Luxington Estate Monumentary</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consetetur,adipisivelit, sed quia non numquam eius modi tempora incidun.</p>
                    {/* <div class="social-icons">
                      <ul>
                        <a href="#"><li><span><i class="fab fa-twitter-square"></i></span></li></a>
                        <a href="#"><li><span><i class="fab fa-facebook-square"></i></span></li></a>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 team-card">
                  <img src="img/10.jpg" />
                  <div className="team-text">
                    <h3>Tony</h3>
                    <h5>CFO of Luxington Estate Monumentary</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consetetur,adipisivelit, sed quia non numquam eius modi tempora incidun.</p>
                    {/* <div class="social-icons">
                      <ul>
                        <a href="#"><li><span><i class="fab fa-twitter-square"></i></span></li></a>
                        <a href="#"><li><span><i class="fab fa-facebook-square"></i></span></li></a>
                      </ul>
                    </div> */}
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
