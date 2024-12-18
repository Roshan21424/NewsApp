import React, { Component } from 'react'

//creating a class component called Navbar
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item"><a className="nav-link" href="/about">business</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">general</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">health</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">science</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">technology</a></li>
              </ul>

            </div>
          </div>
        </nav>

      </div>
    )
  }
}


//73fde9c68d5b46a79ff59891faf523a1