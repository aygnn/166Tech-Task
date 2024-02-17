import React from "react";
import "./Section2.scss";

export default function Section2() {
  return (
    <div className="section2">
      <div className="exam">İmtahan</div>
      <div className="category">Kateqoriya seç</div>
      <div className="blocks">
        <div className="ust_block">
          <div className="block">Buraxılış</div>
          <div className="block">Blok</div>
          <div className="block">Təkmilləşmə</div>
          <div className="block">İbtidai sinif</div>
        </div>
        <div className="alt_block">
          <div className="block">Liseylərə</div>
          <div className="block">Magistratura</div>
          <div className="block">Olimpiadalar</div>
          <div className="block">Fənn imtahanı</div>
        </div>
      </div>
    </div>
  );
}
