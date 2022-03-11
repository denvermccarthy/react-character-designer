import React, { useState } from 'react';
import './Main.css';
import Character from '../../Presentational/Character/Character';
import Picker from '../../Presentational/Picker/Picker';
import Catchphrase from '../../Presentational/Catchphrase/Catchphrase';
import Count from '../../Presentational/Count/Count';
import background from '../../../bg.jpeg';

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
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <Character {...{ head, middle, pants }} />
      <div className="picker-side">
        <Picker
          {...{ setHead, setMiddle, setPants, setHeadCount, setMiddleCount, setPantsCount }}
        />
        <Catchphrase {...{ setCatchphrases, setCatchphrase, catchphrase, catchphrases }} />
        <Count {...{ headCount, middleCount, pantsCount }} />
      </div>
    </div>
  );
}
