import React from 'react';
import * as S from './styles';

function CardHeroes({
  name, img, series, events,
}) {
  return (
    <S.ContainerContent>
      <div className="imageCard">
        <img src={img} />
        <h2>{name}</h2>
      </div>

      <div className="seriesOrEvents">
        {series && series.map((item, index) => <p key={index.toString()}>{item}</p>)}
      </div>

      <div className="seriesOrEvents">
        {events && events.map((item, index) => <p key={index.toString()}>{item}</p>)}
      </div>
    </S.ContainerContent>
  );
}

export default CardHeroes;
