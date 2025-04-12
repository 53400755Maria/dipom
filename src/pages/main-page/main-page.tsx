import React from 'react';
import FlowersCard from '../../components/flowers-card/flowers-card';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

type MainPageProps = {
    flowerOffersCount: number;
}

function MainPage({flowerOffersCount}: MainPageProps): React.JSX.Element {
    return (
      <div className="page page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
              <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#bouquets">Букеты</a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#plants">Растения</a>
                  </li>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="login.html">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Войти</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="favorites.html">
                      <span className="header__favorite-count">{flowerOffersCount}</span> ❤️
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="page__main page__main--index">
          <section className="hero" style={{background: "url('img/flowers-bg.jpg') no-repeat", padding: "100px 0", textAlign: "center"}}>
            <h1 style={{color: "white", fontSize: "2.5em"}}>Свежие цветы с доставкой</h1>
            <Link to="#bouquets" className="button" style={{background: "#ff66b2"}}>Выбрать букет</Link>
          </section>
  
          <section className="about-shop" style={{background: "linear-gradient(135deg, #fff9f9 0%, #ffe6f2 100%)", padding: "60px 0"}}>
            <div className="container">
              <div className="about-shop__content">
                <h2 className="about-shop__title">FloraDream — цветочная сказка для ваших эмоций</h2>
                <div className="about-shop__text">
                  <p>Мы создаем не просто букеты, а живые произведения искусства, которые говорят без слов. Каждый цветок в нашем магазине — это капля вдохновения, собранная в гармоничную композицию.</p>
                  
                  <p>С 2010 года мы дарим клиентам:</p>
                  <ul className="about-shop__features">
                    <li>🔹 Свежие цветы от проверенных поставщиков</li>
                    <li>🔹 Эксклюзивные авторские букеты</li>
                    <li>🔹 Быструю доставку в день заказа</li>
                    <li>🔹 Персональные решения для особых событий</li>
                  </ul>
                </div>
                <div className="about-shop__stats">
                  <div className="stat-item">
                    <div className="stat-number">13+</div>
                    <div className="stat-label">лет на рынке</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5,000+</div>
                    <div className="stat-label">довольных клиентов</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section id="bouquets" className="popular-bouquets">
            <div className="container">
              <h2 className="popular-bouquets__title">Популярные букеты</h2>
              <div className="popular-bouquets__list">
              <FlowersCard/>
              <FlowersCard/>
              <FlowersCard/>
              </div>
            </div>
          </section>
  
          <section id="plants" className="potted-plants">
            <div className="container">
              <h2 className="potted-plants__title">Горшечные растения</h2>
              <p className="potted-plants__subtitle">Живая красота для вашего дома</p>
              
              <div className="potted-plants__list">
              <FlowersCard/>
              <FlowersCard/>
              <FlowersCard/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  export default MainPage;
