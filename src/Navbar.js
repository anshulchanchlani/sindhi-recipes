import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 1
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 2
          </a>
        </li>
      </ul>

      <span class="navbar-text">Navbar text</span>
    </nav>
  );
};

export default NavBar;
