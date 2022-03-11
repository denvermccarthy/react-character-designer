import React from 'react';
import './Count.css';

export default function Count({ headCount, middleCount, pantsCount }) {
  return (
    <p className="count">{`You've changed the head ${headCount} times, the body ${middleCount} times, and the bottoms ${pantsCount} times for a grand total of ${
      pantsCount + middleCount + headCount
    } times!`}</p>
  );
}
