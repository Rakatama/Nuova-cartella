import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Clock from "../pages/Clock";
import ConnectButton from "./ConnectButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  let location = useLocation();
  useEffect(() => {
    // console.log(location)
  }, [location])


  const handleClick1 = () => {
    window.open("https://discord.gg/pUgs4GFVWX");
  };
  const handleClick2 = () => {
    window.open("https://www.instagram.com/valarok_official/");
  };
  const handleClick3 = () => {
    window.open("https://twitter.com/Valarok_");
  };
  const handleClick4 = () => {
    window.open("https://www.opensea.com/");
  };

  const checkbox = document.getElementById("check");
  const label = document.querySelector(".checkbtn");
  const app = document.getElementById("body_app");

  const handleClick = () => {

    if (!checkbox.checked) {
      label.classList.add("close");
      app.classList.add("d-none");
    } else {
      label.classList.remove("close");
      app.classList.remove("d-none");

    }
  };

  const handleCheck = () => {
    if (checkbox.checked) {
      checkbox.checked = false;
      label.classList.remove("close");
      app.classList.remove("d-none");
    }
  };

  return (
    <div>
      <nav id="homenav" style={{ zIndex: "20" }}>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn" onClick={handleClick}>
          <i className="fas fa-bars"></i>
          <i className="fa fa-times"></i>
        </label>

        {window.innerWidth > 858 ? (
          <ul className="header_ul">
            <div className="header_ul_child">
              <li className="header_ul_buttons_div" style={{ float: "left" }}>
                <button
                  onClick={handleClick1}
                  style={{
                    color: "white",
                    background: "black",
                    border: "none",
                    maxHeight: "100px"
                  }}
                >
                  <i className="fa-brands fa-discord dis"></i>
                </button>
                <button
                  onClick={handleClick4}
                  style={{
                    color: "white",
                    background: "black",
                    border: "none",
                    maxHeight: "100px"
                  }}
                >
                  <i className="fa-solid fa-sailboat dis"></i>
                </button>
                <button
                  onClick={handleClick2}
                  style={{
                    color: "white",
                    background: "black",
                    border: "none",
                    maxHeight: "100px"
                  }}
                >
                  <i className="fa fa-instagram dis" aria-hidden="true"></i>
                </button>
                <button
                  onClick={handleClick3}
                  style={{
                    color: "white",
                    background: "black",
                    border: "none",
                    maxHeight: "100px"
                  }}
                >
                  <i className="fa-brands fa-twitter dis"></i>
                </button>
              </li>
              <li>
                <Link to="/" id="nav-a">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mint" id="nav-a">
                  Mint
                </Link>
              </li>
              <li>
                {/* <Link to="/atrium" id="nav-a">
                  Atrium
                </Link> */}
                <div className="atrium">
                  <div
                    id="atrium_child"
                    style={{ textDecoration: "line-through" }}
                  >
                    Atrium
                  </div>
                  <div className="atrium_child2">coming soon</div>
                </div>
              </li>
              <li>
                <Link to="/story" id="nav-a">
                  Story
                </Link>
              </li>
              <li className="hide_utilities">
                <Link to="/utilities" id="nav-a">
                  Utilities
                </Link>
              </li>

              <li className="hide_rf">
                <Link to="/roadmap" id="nav-a">
                  Roadmap
                </Link>
              </li>
              <li className="hide_rf">
                <Link to="/toggle" id="nav-a">
                  Faq
                </Link>
              </li>

              <ConnectButton style={{ zIndex: "10" }} />

              <li className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    bg="dark"
                    className="bg-black border-0"
                  >
                    <i className="fas fa-bars"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    variant="dark"
                    className="menu bg-black mt-2 p-2"
                  >
                    <Dropdown.Item className="hide_utilities_dropdown">
                      <li>
                        <Link to="/utilities" id="nav-a">
                          Utilities
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li>
                        <Link to="/roadmap" id="nav-a">
                          Roadmap
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li>
                        <Link to="/toggle" id="nav-a">
                          Faq
                        </Link>
                      </li>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>
            <Outlet />
          </ul>
        ) : (
          <ul className="header_ul">
            <div className="upper_connect_wallet"></div>
            <ConnectButton />
            <li className="header_mob">
              <Link to="/" id="nav-a" onClick={handleCheck}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/mint" id="nav-a" onClick={handleCheck}>
                Mint
              </Link>
            </li>
            <li>
              {/* <Link to="/atrium" id="nav-a" onClick={handleCheck}> Atrium */}
              <div className="atrium">
                <div
                  id="atrium_child"
                  style={{ textDecoration: "line-through" }}
                >
                  Atrium
                </div>
                <div className="atrium_child2">coming soon</div>
              </div>
              {/* </Link> */}
            </li>
            <li>
              <Link to="/story" id="nav-a" onClick={handleCheck}>
                Story
              </Link>
            </li>
            <li>
              <Link to="/utilities" id="nav-a" onClick={handleCheck}>
                Utilities
              </Link>
            </li>
            <li>
              <Link to="/roadmap" id="nav-a" onClick={handleCheck}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/toggle" id="nav-a" onClick={handleCheck}>
                Faq
              </Link>
            </li>
            <Outlet />
            <div className="header_ul_border">
              <div className="header_ul_border_child"></div>
              <div className="header_ul_border_child_1">
                <img
                  src={"assets/images/valarok-symbol.webp"}
                  alt=""
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <Clock />
            <div className="header_ul_buttons_div">
              <button onClick={handleClick1} className="header_ul_buttons">
                <i className="fa-brands fa-discord dis"></i>
              </button>
              <button onClick={handleClick4} className="header_ul_buttons">
                <i className="fa-solid fa-sailboat dis"></i>
              </button>
              <button onClick={handleClick2} className="header_ul_buttons">
                <i className="fa fa-instagram dis" aria-hidden="true"></i>
              </button>
              <button onClick={handleClick3} className="header_ul_buttons">
                <i className="fa-brands fa-twitter dis"></i>
              </button>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
