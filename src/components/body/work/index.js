import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Certificate</label>
      <div className="work-list">
        {data.map((item, index) => {
          return <WorkCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Work;
