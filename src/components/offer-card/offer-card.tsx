import React from 'react';
import { Link } from 'react-router-dom';

function OfferCard(): React.JSX.Element {
  return (
    <article className="offer-card place-card">
      {/* Метка "Хит" */}
      <div className="place-card__mark">
        <span>Хит</span>
      </div>
      
      {/* Изображение букета */}
      <div className="offer-card__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img
            className="offer-card__image place-card__image"
            src="img/bouquet-1.jpg"
            width={260}
            height={200}
            alt="Букет 'Розовая нежность'"
          />
        </Link>
      </div>
      
      {/* Информация о букете */}
      <div className="offer-card__info place-card__info">
        <div className="offer-card__price-wrapper place-card__price-wrapper">
          <div className="offer-card__price place-card__price">
            <b className="offer-card__price-value place-card__price-value">
              2 990 ₽
            </b>
          </div>
          {/* Кнопка избранного */}
          <button
            className="offer-card__bookmark-button place-card__bookmark-button button place-card__bookmark-button--active"
            type="button"
            aria-label="Удалить из избранного"
          >
            <svg className="offer-card__bookmark-icon place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-heart"></use>
            </svg>
          </button>
        </div>
        
        {/* Рейтинг */}
        <div className="offer-card__rating rating">
          <div className="offer-card__stars rating__stars">
            <span style={{ width: '96%' }}></span>
            <span className="visually-hidden">Рейтинг</span>
          </div>
          <span className="offer-card__rating-value rating__value">4.8</span>
        </div>
        
        {/* Название и тип */}
        <h2 className="offer-card__name place-card__name">
          <Link to="#">Розовая нежность</Link>
        </h2>
        <p className="offer-card__type place-card__type">Розы, пионы, эвкалипт</p>
      </div>
    </article>
  );
}

export default OfferCard;
