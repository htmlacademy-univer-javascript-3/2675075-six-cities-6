import React from 'react';

interface CityTabsProps {
  cities: string[];
  activeCity: string;
}

const CityTabs: React.FC<CityTabsProps> = ({ cities, activeCity }) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityName) => (
          <li key={cityName} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                cityName === activeCity ? 'tabs__item--active' : ''
              }`}
              href="#"
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default CityTabs;