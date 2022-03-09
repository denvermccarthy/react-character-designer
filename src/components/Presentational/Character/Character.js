import React from 'react';
import './Character.css';
export default function Character({ head, middle, pants }) {
  return (
    <div className="character">
      <div
        className="head"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}./body-parts/${head}-head.png)` }}
      ></div>
      <div
        className="middle"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}./body-parts/${middle}-middle.png)`,
        }}
      ></div>
      <div
        className="legs"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}./body-parts/${pants}-pants.png)` }}
      ></div>
    </div>
  );
}
