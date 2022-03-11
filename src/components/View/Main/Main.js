import React, { useState } from 'react';
import './Main.css';
import Character from '../../Presentational/Character/Character';
import Picker from '../../Presentational/Picker/Picker';
import Catchphrase from '../../Presentational/Catchphrase/Catchphrase';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('leg');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <div className="main">
      <Character {...{ head, middle, pants }} />
      <div className="picker-side">
        <Picker {...{ setHead, setMiddle, setPants }} />
        <Catchphrase {...{ setCatchphrases, setCatchphrase, catchphrase, catchphrases }} />
      </div>
    </div>
  );
}
