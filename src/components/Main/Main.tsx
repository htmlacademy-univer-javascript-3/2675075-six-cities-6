import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import CityTabs from '../../components/CityTabs/CityTabs';
import OfferCard from '../../components/OfferCard/OfferCard';
import { Offer } from '../../types';

interface MainProps {
  offersCount: number;
}

const Main: React.FC<MainProps> = ({ offersCount }) => {
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Popular');

  const places: Offer[] = [
    {
      id: 1,
      isPremium: true,
      imageSrc: 'img/apartment-01.jpg',
      price: 120,
      rating: 80,
      title: 'Beautiful & luxurious apartment at great location',
      type: 'Apartment',
      isBookmarked: false,
      city: 'Amsterdam'
    },
    {
      id: 2,
      isPremium: false,
      imageSrc: 'img/room.jpg',
      price: 80,
      rating: 80,
      title: 'Wood and stone place',
      type: 'Room',
      isBookmarked: true,
      city: 'Amsterdam'
    },
    {
      id: 3,
      isPremium: false,
      imageSrc: 'img/apartment-02.jpg',
      price: 132,
      rating: 80,
      title: 'Canal View Prinsengracht',
      type: 'Apartment',
      isBookmarked: false,
      city: 'Amsterdam'
    },
    {
      id: 4,
      isPremium: true,
      imageSrc: 'img/apartment-03.jpg',
      price: 180,
      rating: 100,
      title: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
      isBookmarked: false,
      city: 'Amsterdam'
    },
    {
      id: 5,
      isPremium: false,
      imageSrc: 'img/room.jpg',
      price: 80,
      rating: 80,
      title: 'Wood and stone place',
      type: 'Room',
      isBookmarked: true,
      city: 'Amsterdam'
    },
  ];

  const city = 'Amsterdam';
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const sortOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        
        <CityTabs cities={cities} activeCity={city} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {city}</b>
              
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span 
                  className="places__sorting-type" 
                  tabIndex={0}
                  onClick={() => setSortIsOpen(!sortIsOpen)}
                >
                  {activeSort}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {sortIsOpen && (
                  <ul className="places__options places__options--custom places__options--opened">
                    {sortOptions.map((option) => (
                      <li
                        key={option}
                        className={`places__option ${
                          option === activeSort ? 'places__option--active' : ''
                        }`}
                        tabIndex={0}
                        onClick={() => {
                          setActiveSort(option);
                          setSortIsOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </form>

              <div className="cities__places-list places__list tabs__content">
                {places.map((place) => (
                  <OfferCard
                    key={place.id}
                    isPremium={place.isPremium}
                    imageSrc={place.imageSrc}
                    price={place.price}
                    rating={place.rating}
                    title={place.title}
                    type={place.type}
                    isBookmarked={place.isBookmarked}
                  />
                ))}
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;