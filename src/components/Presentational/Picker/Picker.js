import React from 'react';
import './Picker.css';
export default function Picker({
  setHead,
  setMiddle,
  setPants,
  setHeadCount,
  setMiddleCount,
  setPantsCount,
}) {
  return (
    <div className="picker">
      Style your character!!
      <label>
        Head
        <select
          id="head-dropdown"
          onChange={(e) => {
            setHead(e.target.value);
            setHeadCount((prevCount) => ++prevCount);
          }}
        >
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </label>
      <label>
        Middle
        <select
          id="middle-dropdown"
          onChange={(e) => {
            setMiddle(e.target.value);
            setMiddleCount((prevCount) => ++prevCount);
          }}
        >
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label>
        Bottom
        <select
          id="bottom-dropdown"
          onChange={(e) => {
            setPants(e.target.value);
            setPantsCount((prevCount) => ++prevCount);
          }}
        >
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Jeans</option>
        </select>
      </label>
    </div>
  );
}
