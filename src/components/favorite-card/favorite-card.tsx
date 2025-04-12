import { Link } from 'react-router-dom';

function FavoriteCard(): React.JSX.Element {
    return (
        <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
            <div className="locations__item">
                <span className="locations__item-link">Романтические</span>
            </div>
        </div>
        <div className="favorites__places">
            <article className="favorites__card place-card">
                <div className="favorites__image-wrapper place-card__image-wrapper">
                    <Link to="#">
                        <img className="place-card__image" src="img/bouquet-1.jpg" width="150" height="110" alt="Букет 'Розовая нежность'" />
                    </Link>
                </div>
                <div className="favorites__card-info place-card__info">
                    <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                            <b className="place-card__price-value">2 990 ₽</b>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            ♥
                        </button>
                    </div>
                    <h2 className="place-card__name">
                        <Link to="#">Розовая нежность</Link>
                    </h2>
                    <p className="place-card__type">Розы, пионы, эвкалипт</p>
                </div>
            </article>
        </div>
    </li>
    )
}
export default FavoriteCard;
