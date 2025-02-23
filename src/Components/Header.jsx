import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2>
            <span style={{ color: "rgb(106, 130, 230)" }}>Anshu</span>man
            <span style={{ color: "rgb(106, 130, 230)" }}>.</span>
          </h2>
        </NavLink>
        <img
          src="Images/burger-menu.png"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        />
      </header>

      <div
        class="offcanvas offcanvas-start"
        style={{ width: "300px" }}
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            style={{ right: "20px", position: "absolute", top: "20px" }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body" id="menu_box">
          <div className="item1">
            <img
              src="Images/small.jpeg"
              width="95px"
              height="95px"
              style={{
                border: "3px solid rgb(30, 126, 185)",
                borderRadius: "50%",
              }}
              alt="Me"
            />
            <h3>Kumar Anshuman</h3>
          </div>
          <div className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Home
                </span>
              </a>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  About
                </span>
              </a>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Services
                </span>
              </a>
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Portfolio
                </span>
              </a>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Contact
                </span>
              </a>
            </NavLink>
          </div>

          <div className="social_link">
            <div>
              <a href="https://www.linkedin.com/in/kumar-anshuman-50b5a1256?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVxLEktimR8Wv%2FrSRAxNhHQ%3D%3D" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Anshuaman2001" target="_blank">
                <i class="fa-brands fa-github" target="_blank"></i>
              </a>
              <a href="mailto: kranshu351@gmail.com" target="_blank">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div>
            <p>Copyright © 2023 Kumar Anshuman. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
