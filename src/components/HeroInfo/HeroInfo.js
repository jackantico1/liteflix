import React, {Component} from 'react';
import './HeroInfo.css';
import TextBox from '../TextBox/TextBox';
import ButtonCollection from '../ButtonCollection/ButtonCollection';

const mainItems = [{displayText: "  ORGINAL DE LITEFLIX"}, {displayText: "Kids at School"}, {displayText: "Ver temporadoa 1", subText: "Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar toast. Slow-carb post-ironic kickstarter synth franzen."}];

class HeroInfo extends Component {

  render () {

    let items = mainItems.map(item=><TextBox {...item}/>)
    items.splice(2, 0, <ButtonCollection/>)

    return (
      <div className="HeroInfo">
          {items}
      </div>
    );
  }

}

export default HeroInfo;