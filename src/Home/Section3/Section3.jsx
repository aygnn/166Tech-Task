import React, { useState } from "react";
import "./Section3.scss";
import Clock from "../../Pictures/Clock.png";
import Frame from "../../Pictures/Frame.png";
import Vector from "../../Pictures/Vector.png";
import { Link } from "react-router-dom";

export default function Section3() {
  const [visible, setVisible] = useState(6);

  const kartlar = [
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
    {
      title: "3-cü sinif imtahanı",
      time: "45 dəqiqə",
      stars: "2 rəy",
      subjects: ["10 sual- Azərbaycan dili", "10 sual-Riyaziyyat"],
      sections: ["İbtidai sinif", "3-cü sinif"],
    },
  ];

  const showMore = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div className="section3">
      <div className="exam">Ən çox işlənənlər</div>
      <div className="category">İmtahanlar</div>
      <div className="my_exam container">
        <div className="filters">
          <div className="filter">Filter</div>
          <div className="alt_filter">
            <p className="yazi">Kategoriyalar</p>
            <div className="kateqoriyalar">
              <div className="kategori qara">
                <p>İbtidai sinif</p>
              </div>
              <div className="kategori ">
                <p>Buraxılış</p>
              </div>
              <div className="kategori">
                <p>Blok</p>
              </div>
              <div className="kategori">
                <p>Təkmilləşmə</p>
              </div>

              <div className="kategori">
                <p>Liseylərə</p>
              </div>
              <div className="kategori">
                <p>Magistratura</p>
              </div>
              <div className="kategori">
                <p>Olimpiadalar</p>
              </div>
              <div className="kategori">
                <p>Fənn imtahanı</p>
              </div>
            </div>

            <p className="yazi">Etiketlər</p>
            <div className="etiketler">
              <div className="kategori">
                <p>2-ci sinif</p>
              </div>
              <div className="kategori">
                <p>3-cü sinif</p>
              </div>
              <div className="kategori qara">
                <p>4-cü sinif</p>
              </div>
            </div>
          </div>
        </div>

        <div className="kartlar">
          {kartlar.slice(0, visible).map((kart, index) => (
            <Link to={"Imtahan3"} key={index}>
              <Link to={"Imtahan3"} key={index}>
                <div className="kart">
                  <div className="title">
                    <p>{kart.title}</p>
                  </div>
                  <div className="koment">
                    <div className="time">
                      <img src={Clock} alt="Clock" />
                      <p>{kart.time}</p>
                    </div>
                    <div className="star">
                      <img src={Frame} alt="Frame" />
                      <img src={Vector} alt="Vector" />
                      <p>{kart.stars}</p>
                    </div>
                  </div>

                  <div className="suallar">
                    <p>Suallar</p>
                    <ul>
                      {kart.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cizgi"></div>

                  <div className="bolme">
                    {kart.sections.map((section, index) => (
                      <div key={index}>{section}</div>
                    ))}
                  </div>

                  <button className="button type1">
                    <span className="btn-txt">1 AZN- indi al</span>
                  </button>
                </div>
              </Link>
            </Link>
          ))}

          {kartlar.length !== 0 ? (
            <div className="daha_cox">
              <button onClick={showMore}>Daha çox</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
