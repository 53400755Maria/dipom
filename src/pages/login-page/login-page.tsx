import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';


function LoginPage(): React.JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Добро пожаловать в FloraDream</h1>
            <div className="login__flower-icon">🌸</div>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Email</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Пароль</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Войти
              </button>
            </form>
            <div className="login__register">
              Нет аккаунта?{' '}
              <Link to="/register" className="login__register-link">
                Зарегистрируйтесь
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
