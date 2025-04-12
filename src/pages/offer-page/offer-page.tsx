import React from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

type OfferPageProps = {
  offersCount: number;
};

function OfferPage({ offersCount }: OfferPageProps): React.JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">user@example.com</span>
                    <span className="header__favorite-count">{offersCount}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Выйти</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <div className="container">
          <section className="offer">
            <h1 className="offer__title">
              {offersCount > 0 
                ? `Доступные букеты (${offersCount})` 
                : "Пока нет доступных букетов"}
            </h1>

            {offersCount > 0 ? (
              <div className="offer__list">
                {/* Пример статических карточек */}
                <div className="offer__item">
                  <OfferCard />
                </div>
                <div className="offer__item">
                  <OfferCard />
                </div>
              </div>
            ) : (
              <div className="offer__empty">
                <div className="offer__empty-icon">🌸</div>
                <p>Скоро у нас будут новые букеты!</p>
                <Link to="#contacts" className="button">Узнать о поступлении</Link>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="footer container">
      <Logo isFooter />
      </footer>
    </div>
  );
}

export default OfferPage;
