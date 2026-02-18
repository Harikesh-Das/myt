/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/myntra.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.scss";
import { GoSearch } from "react-icons/go";
import { SlUser } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
    <div className="header-main">
      {/* //Header Starts here */}
      <div className="header-navbar">
        {/* //navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* logo */}
            <a className="logo" href="#">
              <img src={logo} alt="logo"></img>
            </a>
            {/* Navlinks */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="Navlinks">
                <li className="nav-item dropdown" >
                  <a className="nav-link active"  href="#" id="men">
                    MEN
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown" id="women">
                  <a className="nav-link active"  href="#">
                    WOMEN
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>

               <li className="nav-item dropdown" id="kids">
                  <a className="nav-link active" href="#">
                    KIDS
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>
              <li className="nav-item dropdown" id="Home">
                  <a className="nav-link active" href="#">
                    HOME
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown" id="beauty">
                  <a className="nav-link active" href="#">
                    BEAUTY
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown" id="genz">
                  <a className="nav-link active" href="#">
                    GENZ
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>
               <li className="nav-item dropdown" id="studio">
                  <a className="nav-link active" href="#">
                    STUDIO<sup>NEW</sup>
                  </a>

                  <div className="dropdown-menu-custom">
                    <ul>
                      <li>
                        <strong>Topwear</strong>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Bottomwear</strong>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* SearchBox */}
              <div className="search">
                <GoSearch />
                <input
                  className="SearchBox"
                  type="search"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                />
              </div>
              <div className="icons">
                <ul className="Iconlinks">
                  <li className="iconItem">
                    <SlUser />
                    <p>
                      <b>Profile</b>
                    </p>
                  </li>
                  <li className="iconItem">
                    <MdFavoriteBorder />
                    <p>
                      <b>Wishlist</b>
                    </p>
                  </li>
                  <li className="iconItem">
                    <HiOutlineShoppingBag />
                    <p>
                      <b>Bag</b>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Navbar ends---------- */}
      </div>
    </div>
  );
}
export default Header;
