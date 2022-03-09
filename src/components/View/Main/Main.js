import React from 'react';
import './Main.css';
import Character from '../../Presentational/Character/Character';
import Picker from '../../Presentational/Picker/Picker';

export default function Main() {
  return (
    <div className="main">
      <Character />
      <Picker />
    </div>
  );
}
