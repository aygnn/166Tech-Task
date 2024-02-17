import React from "react";
import "./Footer.scss";
import Logo from "../Pictures/Logo.png";
import mektub from "../Pictures/mektub.png";
import phone from "../Pictures/phone.png";
import insta from "../Pictures/insta.png";
import facebook from "../Pictures/facebook.png";
import whatsapp from "../Pictures/whatsapp.png";
import telegram from "../Pictures/telegram.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="konteyner container">
        <div className="footer1">
          <div className="logoo">
            <img src={Logo} alt="My Image" />
          </div>
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
        </div>

        <div className="footer2">
          <div>
            <img src={mektub} alt="My Image" />
            <p>Nümunə@gmail.com</p>
          </div>
          <div>
            <img src={phone} alt="My Image" />
            <p>000 000 00 00</p>
          </div>
        </div>
        <div className="footer3">
          <img src={insta} alt="My Image" />
          <img src={facebook} alt="My Image" />
          <img src={whatsapp} alt="My Image" />
          <img src={telegram} alt="My Image" />
        </div>
        <div className="cizgi"></div>
        <div className="huquq">
          © 2024, şirkərin adı. Bütün hüquqlar qorunur
        </div>
      </div>
    </div>
  );
}
