import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul id="menu">
    <a href="#t1"><li className="icon" id="home"></li></a>
    <a href="#t2"><li className="icon" id="search"></li></a>
    <a href="#t3"><li className="icon" id="ranking"></li></a>
    <a href="#t4"><li className="icon" id="user"></li></a>
  </ul>
);

/*
        <Link to="/"><li className="icon" id="home"></li></Link>
        <Link to="/search"><li className="icon" id="search"></li></Link>
        <Link to="/login"><li className="icon" id="ranking"></li></Link>
        <Link to="/addform"><li className="icon" id="user"></li></Link>
*/
