import React from 'react';
import { Link } from 'react-router-dom';

function FlowersCard(): React.JSX.Element {
    return (
        <article className="bouquet-card">
                  <div className="bouquet-card__badge">Хит</div>
                  <div className="bouquet-card__image-wrapper">
                    <Link to="#">
                      <img className="bouquet-card__image" src="img/bouquet-1.jpg" alt="Букет 'Розовая нежность'" />
                    </Link>
                  </div>
                  <div className="bouquet-card__info">
                    <h3 className="bouquet-card__name">Розовая нежность</h3>
                    <p className="bouquet-card__composition">Розы, пионы, эвкалипт</p>
                    <div className="bouquet-card__footer">
                      <div className="bouquet-card__price">2 990 ₽</div>
                      <button className="bouquet-card__favorite" type="button">♥</button>
                    </div>
                  </div>
                </article>
    )
}
export default FlowersCard;
