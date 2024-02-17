import React from "react";
import Logo from "../Pictures/Logo.png";
import "./Navbarr.scss";
import { Link } from "react-router-dom";

export default function Navbarr() {
  return (
    <div className="navbarr">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>

      <div className="logoo">
        <Link to={"/"}>
          <img src={Logo} alt="My Image" />
        </Link>
      </div>

      <div className="navi" id="navi">
        <div className="list">
          <ul>
            <li>
              <Link to="/">Haqqımızda</Link>
            </li>
            <li>
              <Link to="/">Kitablar</Link>
            </li>
            <li>
              <Link to="/">İmtahanlar</Link>
            </li>
            <li>
              <Link to="/">Bizimlə Əlaqə</Link>
            </li>
            <li>
              <select name="dil">
                <option value="az">AZ</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="daxil_ol">Daxil ol</button>
          <button className="qeyd">Qeydiyyat</button>
        </div>
      </div>
    </div>
  );
}
