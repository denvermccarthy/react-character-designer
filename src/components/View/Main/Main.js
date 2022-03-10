import React, { useState } from 'react';
import './Main.css';
import Character from '../../Presentational/Character/Character';
import Picker from '../../Presentational/Picker/Picker';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('leg');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState([]);

  return (
    <div className="main">
      <Character {...{ head, middle, pants }} />
      <Picker {...{ setHead, setMiddle, setPants }} />
    </div>
  );
}
