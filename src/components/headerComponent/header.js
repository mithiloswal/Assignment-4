import React, { Component } from 'react';
import
{
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo">
      </div>
      <div className="aside"> <br /> <br />
        <ul> <h3>
          <li className="first">
          <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
          <li>
            <Link to="/Apple"> Apple </Link>
          </li>
          <li>
            <Link to="/Oneplus"> OnePlus </Link>
          </li>
          <li className="last">
            <Link to="/Samsung"> Samsung </Link>
          </li> </h3>
        </ul>
      </div>
      </header>
    );
  }
}

export default Header;
