import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function ErrorPage(): React.JSX.Element {
  return (
    <div className="page page--error" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--error" style={{ flex: 1 }}>
        <div className="error-container container">
          <section className="error">
            <div className="error__content">
              <h1 className="error__title">404</h1>
              <p className="error__message">Упс! Страница не найдена</p>
              <div className="error__flower">🌸</div>
              <p className="error__description">
                Возможно, эта страница была удалена или перемещена
              </p>
              <Link 
                to="/" 
                className="error__button button button--primary"
              >
                Вернуться на главную
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer container" style={{ marginTop: 'auto' }}>
        <Logo isFooter />
      </footer>
    </div>
  );
}

export default ErrorPage;
