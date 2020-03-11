import React, {Component} from 'react';
import './Model.css';
import LoadingDock from '../LoadingDock/LoadingDock';
import InfoInput from '../InfoInput/InfoInput';

class Model extends Component {

  render () {

    return (
        <div className="model">
          <LoadingDock/>
          <div className="containerForInfoInputs">
            <InfoInput displayText="NOMBRE DE LA PELICULA"/>
            <InfoInput displayText="CATEGORIA"/>
          </div>
        </div>
    );
  }

}

export default Model;