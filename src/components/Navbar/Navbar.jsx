import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    const currencyMap = {
      usd: { name: "usd", symbol: "$" },
      eur: { name: "eur", symbol: "€" },
      inr: { name: "inr", symbol: "₹" },
    };
    setCurrency(currencyMap[event.target.value] || currencyMap["usd"]);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-links">
        <Link to="/"><li className="navbar-item">Home</li></Link>
        <li className="navbar-item">Features</li>
        <li className="navbar-item">Pricing</li>
        <Link to="/blog"><li className="navbar-item">Blog</li></Link>
      </ul>
      <div className="nav-right">
        <select className="currency-selector" onChange={currencyHandler} >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="signup-button">Sign up</button>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-singh-mehra-7a1025217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
