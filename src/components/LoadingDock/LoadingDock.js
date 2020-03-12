import React, {Component} from 'react';
import './LoadingDock.css';

class LoadingDock extends Component {

  render () {

    return (
        <div className="loadingDock">
          <p className="pLoadingDock">Agregar archivo o arrastrarlo y soltarlo aquí</p>
        </div>
    );
  }

}

export default LoadingDock;