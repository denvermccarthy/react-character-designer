import React from 'react';
import './Picker.css';
export default function Picker({ setHead, setMiddle, setPants }) {
  return (
    <div className="picker">
      Style your character!!
      <label>
        Head
        <select id="head-dropdown" onClick={(e) => setHead(e.target.value)}>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </label>
      <label>
        Middle
        <select id="middle-dropdown" onClick={(e) => setMiddle(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </label>
      <label>
        Bottom
        <select id="bottom-dropdown" onClick={(e) => setPants(e.target.value)}>
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Jeans</option>
        </select>
      </label>
    </div>
  );
}
