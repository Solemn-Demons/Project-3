import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <section id="nav">
      <img id="cream" src="./client/src/img/Cloud-t.png" alt="Cloud" />
      <nav>
        <ul>
          <li><Link to="/home"><img src="./client/src/img/Home.png" alt="Purple ink well that says home button" /></Link></li>
          <li><Link to="/info"><img src="./client/src/img/Info.png" alt="Red ink well that says info button" /></Link></li>
          <li><Link to="/profile"><img src="./client/src/img/Profile.png" alt="Blue ink well that says Profile button" /></Link></li>
          <li><Link to="/login"><img src="./client/src/img/log-sign.png" alt="Green ink well that says Login and Sign-up" /></Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
