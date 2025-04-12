import React from 'react';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

type FavoritePageProps = {
  fullOffersCount: number;
};

function FavoritePage({ fullOffersCount }: FavoritePageProps): React.JSX.Element {
  return (
    <div className="page page--favorites">
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
                    <span className="header__favorite-count">{fullOffersCount}</span>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">
              {fullOffersCount > 0
                ? `Избранные букеты (${fullOffersCount})`
                : "В избранном пока ничего нет"}
            </h1>

            {fullOffersCount > 0 ? (
              <ul className="favorites__list">
                {/* Пример статических карточек (можно заменить на динамические данные) */}
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <span className="locations__item-link">Романтические</span>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoriteCard />
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <span className="locations__item-link">Летние</span>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoriteCard />
                  </div>
                </li>
              </ul>
            ) : (
              <div className="favorites__empty">
                <div className="favorites__empty-icon">🌸</div>
                <p>Добавьте букеты в избранное, чтобы они появились здесь</p>
                <Link to="#bouquets" className="button">Посмотреть букеты</Link>
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

export default FavoritePage;
