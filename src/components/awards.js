import React from "react";

import LAAPFF from "../static/award_2019_LAAPFF.png";
import BWFF from "../static/award_2019_BESTEXPERIMENTAL-BROOKLYNWOMENSFILMFESTIVAL.png";
import Outfest from "../static/award_2019_OutfestFusion.png";
import Vegas from "../static/awards_2019_Vegas.png";
import NewFest from "../static/award_2019_NewFest.png";
import SQFF from "../static/award_2019_SQFF.png";
import DeepFocus from "../static/award_2019_deepfocus.png";
import HND from "../static/award_2019_Hollywood-New-Directors.png";
import AAshowcase from "../static/awards_2019_AsianAmericanShowcase.png";
import CAAM from "../static/award_2019_CAAMFest.png";
import POW from "../static/award_2019_POW.png";
import DisOrient from "../static/award_2019_disorient_x2.png";
import BestShorts from "../static/awards_BEST-SHORTS-Excellence.png";
import CISF from "../static/award_2018_CISF-Best-Experimental.png";
import OutStream from "../static/award_2020_Outstream.png";
import LAAFF from "../static/award_2019_LAAFF.png";
import MKE from "../static/award_2020_MFF.png";

const Awards = () => {
  const awards = [
    {
      name: "2019 Los Angeles Asian Pacific Film Festival",
      img: LAAPFF,
    },
    {
      name: "2019 Brooklyn Women's Film Festival",
      img: BWFF,
    },
    {
      name: "2019 Outfest Fusion",
      img: Outfest,
    },
    {
      name: "2019 Vegas Movie Awards",
      img: Vegas,
    },
    {
      name: "2019 NewFest",
      img: NewFest,
    },
    {
      name: "2019 Seattle Queer Film Festival",
      img: SQFF,
    },
    {
      name: "2019 Deep Focus",
      img: DeepFocus,
    },
    {
      name: "2019 Hollywood New Directors",
      img: HND,
    },
    {
      name: "2019 Asian American Showcase",
      img: AAshowcase,
    },
    {
      name: "2019 CAAMFest",
      img: CAAM,
    },
    {
      name: "2019 Hollywood New Directors",
      img: POW,
    },
    {
      name: "2019 Asian American Showcase",
      img: DisOrient,
    },
    {
      name: "2019 CAAMFest",
      img: BestShorts,
    },
    {
      name: "2018 Hollywood New Directors",
      img: CISF,
    },
    {
      name: "2019 OutStream",
      img: OutStream,
    },
    {
      name: "2019 Los Angeles Asian Fim Festival",
      img: LAAFF,
    },
    {
      name: "2020 MKE Film Festival",
      img: MKE,
    },
  ];

  return (
    <section id="Awards" className="awards">
      <div className="gradient-container" />
      <div className="awards-container">
        <div className="container">
          {awards.map((award, key) => (
            <figure key={key}>
              <img alt={award.name} src={award.img} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
