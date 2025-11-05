import React from 'react';
import Header from '../../components/Header/Header';
import OfferCard from '../../components/OfferCard/OfferCard';

const Favorites: React.FC = () => (
  <div className="page">
    <Header />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <OfferCard
                  isPremium={true}
                  imageSrc="img/apartment-small-03.jpg"
                  price={180}
                  rating={100}
                  title="Nice, cozy, warm big bed apartment"
                  type="Apartment"
                  isBookmarked={true}
                  size="small"
                />
                <OfferCard
                  imageSrc="img/room-small.jpg"
                  price={80}
                  rating={80}
                  title="Wood and stone place"
                  type="Room"
                  isBookmarked={true}
                  size="small"
                />
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <OfferCard
                  imageSrc="img/apartment-small-04.jpg"
                  price={180}
                  rating={100}
                  title="White castle"
                  type="Apartment"
                  isBookmarked={true}
                  size="small"
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <footer className="footer container">
      <a className="footer__logo-link" href="/">
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </a>
    </footer>
  </div>
);

export default Favorites;