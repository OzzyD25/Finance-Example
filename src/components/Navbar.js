import React, { Component } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar-expand-sm px-sm-5">
        <div className="d-flex text-align-center">
          <div className="ml-5">
            <h4>-Logo here-</h4>
          </div>
          {/* Completed Media Queries & Dropdown Menu */}
          <div>
            <ul className="d-none d-md-block">
              <AnchorLink offset='-80' href="#about"><li>About</li></AnchorLink>
              <AnchorLink offset='-100' href="#services"><li>Services</li></AnchorLink>
              <AnchorLink offset='-80' href="#free-text"><li>Free Text</li></AnchorLink>
              <AnchorLink offset='-100' href="#team"><li>Our Team</li></AnchorLink>
              <AnchorLink href="#contact"><li>Contact</li></AnchorLink>
            </ul>
          </div>
          <div class="dropdown d-md-none">
            <button class="dropbtn">
              <i className="fas fa-align-justify fa-2x" />
            </button>
            <div class="dropdown-content">
              <a><AnchorLink offset='-80' href="#about">About</AnchorLink></a>
              <a><AnchorLink offset='-100' href="#services">Services</AnchorLink></a>
              <a><AnchorLink offset='-80' href="#free-text">Free Text</AnchorLink></a>
              <a><AnchorLink offset='-100' href="#team">Our Team</AnchorLink></a>
              <a><AnchorLink offset='-100' href="#contact">Contact</AnchorLink></a>
            </div>
          </div>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.div`
  background: #525252;
  color: white;
  height: 50px;
  border: 1px solid #525252;
  box-shadow: 2px 2px 10px 0px grey;
  /* NavBar Shrink on Scroll
      position: fixed;
      width: 100%;
      z-index: 1;
  */
  h4 {
    margin-top: 1.5px;
  }
  /* Dropdown Styling */
  .dropbtn {
    font-size: 12px;
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  .dropdown:hover .dropbtn {
    cursor: pointer;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 85px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 5px 0px 5px 5px;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
    color: #00A9DF;
    cursor: pointer;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

`
