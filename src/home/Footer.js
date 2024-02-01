import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  // const handleClick = () => {
  //     window.open("https://www.valarok.com/terms/");
  //   };
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
  return (
    <div className="footer">
      <div className="column">
        <div className="column_child1">
          <h2>Follow Us</h2>
          <button onClick={handleClick1}><i className="fa-brands fa-discord dis"></i></button>
          <button onClick={handleClick3}><i className="fa-brands fa-twitter dis"></i></button>
          <button onClick={handleClick2}><i className="fa fa-instagram dis" aria-hidden="true"></i></button>
          <button onClick={handleClick4}><i className="fa-solid fa-sailboat dis"></i></button>
        </div>
      </div>
      <div className="column">
        <h2>&copy; Valarok Since 2023</h2>
        <button><Link to="/terms" id="term">TERMS AND CONDITIONS</Link></button>
      </div>
      <div className="column">
        <h2>CONTACT US</h2>
        <p>contact@valarok.com</p>
      </div>
    </div>

  )
}
export default Footer;
