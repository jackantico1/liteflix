import React, {Component} from 'react';
import './HeroInfo.css';
import TextBox from '../TextBox/TextBox';
import ButtonCollection from '../ButtonCollection/ButtonCollection';

class HeroInfo extends Component {

  render () {
    return (
      <div className="HeroInfo">
          <TextBox/>
          <TextBox/>
          <ButtonCollection/>
          <TextBox/>
      </div>
    );
  }

}

export default HeroInfo;