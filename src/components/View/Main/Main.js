import React, { useState } from 'react';
import './Main.css';
import Character from '../../Presentational/Character/Character';
import Picker from '../../Presentational/Picker/Picker';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('leg');

  return (
    <div className="main">
      <Character {...{ head, middle, pants }} />
      <Picker {...{ setHead, setMiddle, setPants }} />
    </div>
  );
}
