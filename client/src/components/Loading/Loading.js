import './Loading.css';

import { PulseLoader } from 'halogenium';
import * as React from 'react';
import { createPortal } from 'react-dom';


export default class Loading extends React.Component {
  render() {
    return createPortal(
      <div className="loading-container">
        <PulseLoader color="#26A65B" size="16px" margin="4px" />
      </div>,
      document.body);
  }
}
