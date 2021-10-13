import React from "react";
import './Sidenav.css';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li><Link to="/homes">Home Plans</Link></li>
        <li><Link to="/lots">Lots</Link></li>
      </ul>
    </div>
  )
}

export default Sidenav;