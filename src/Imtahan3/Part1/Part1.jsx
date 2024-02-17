import React from "react";
import "./Part1.scss";
import Saly from "../../Pictures/Saly.png";
import Clock from "../../Pictures/Clock.png";
import Documents from "../../Pictures/Documents.png";
import Calendar from "../../Pictures/Calendar.png";
import qizil from "../../Pictures/qizil.png";
import gumus from "../../Pictures/gumus.png";
import burunc from "../../Pictures/burunc.png";
import dord from "../../Pictures/dord.png";
import bes from "../../Pictures/bes.png";
import stars from "../../Pictures/stars.png";
import ox from "../../Pictures/ox.png";
import Chat from "../../Pictures/Chat.png";
import Frame from "../../Pictures/Frame.png";

export default function Part1() {
  const siralar = [
    { imgSrc: qizil, name: "Ilahə Nəzərova", score: "20 bal", time: "-12 dəq" },
    { imgSrc: gumus, name: "Ilahə Nəzərova", score: "20 bal", time: "00 dəq" },
    {
      imgSrc: burunc,
      name: "Ilahə Nəzərova",
      score: "19 bal",
      time: "-12 dəq",
    },
    { imgSrc: dord, name: "Ilahə Nəzərova", score: "18 bal", time: "-12 dəq" },
    { imgSrc: bes, name: "Ilahə Nəzərova", score: "17 bal", time: "-12 dəq" },
  ];
  const carts = [];

  for (let i = 0; i < 18; i++) {
    carts.push(
      <div className="cart" key={i}>
        <div className="name">İlaha Nazarova</div>
        <div className="ulduz">
          <img src={Frame} alt="Frame" />
          <p>2 gün əvvəl</p>
        </div>
        <div className="yazilar">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </div>
      </div>
    );
  }
  return (
    <div className="part1 container">
      <div className="sectionn1">
        <div className="texts">
          <div className="uc_sinif">3-cü sinif imtahanı</div>

          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
            </li>
          </ul>
          <div className="buton">
            <button>1 Azn-imtahanı al</button>
          </div>
        </div>
        <div className="sekil">
          <img src={Saly} alt="My Image" />
        </div>
      </div>

      <div className="sectionn2">
        <div className="bolme1">
          <div className="melumat">Məlumat</div>
          <div className="tarix">
            <div className="time">
              <img src={Clock} />
              <p>45 dəqiqə</p>
            </div>
            <div className="time">
              <img src={Documents} />
              <p>20 Sual</p>
            </div>
            <div className="time">
              <img src={Calendar} />
              <p>22.05.2023 hazırlanıb</p>
            </div>
          </div>
          <div className="suallar">
            <p>Suallar</p>
            <ul>
              <li>10 sual- Azərbaycan dili</li>
              <li>10 sual-Riyaziyyat</li>
            </ul>
          </div>
        </div>
        <div className="bolme2">
          <div className="netice">İmtahan üzrə nəticələr </div>
          <div className="siralar">
            {siralar.map((sira, index) => (
              <div className="sira" key={index}>
                <div className="ad">
                  <img src={sira.imgSrc} alt="My Image" />
                  <p>{sira.name}</p>
                </div>
                <div className="deqiqe">
                  {sira.score} · {sira.time}
                  <img src={ox} alt="My Image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reyler">Rəylər</div>

      <div className="sectionn3">
        <div className="karticka">
          <div className="puan">
            <p className="p">4.9</p>
            <div>
              <img src={Chat} />
              <p> 440 rəy</p>
            </div>
          </div>
          <div className="ulduzlar">
            <img src={stars} />
          </div>
        </div>
      </div>

      <div className="sectionn4">{carts}</div>
      <div className="daha_cox">
        <button>Daha çox</button>
      </div>
    </div>
  );
}
