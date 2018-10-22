import React, { Component } from 'react';
import logo from './images/logo.svg';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };

  render() {
    return (
      <div className="main-header" id="navbar">
        <div className="logo">
          <img src={logo} height="25" alt="logo"/>
        </div>
        <div className="header-icon">
        </div>
      </div>
    )
  }
}
export default Header;
