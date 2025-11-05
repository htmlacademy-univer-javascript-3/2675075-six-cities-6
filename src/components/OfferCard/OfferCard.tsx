import React from 'react';

interface OfferCardProps {
  isPremium?: boolean;
  imageSrc: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  isBookmarked: boolean;
  size?: 'small' | 'large';
}

const OfferCard: React.FC<OfferCardProps> = ({
  isPremium = false,
  imageSrc,
  price,
  rating,
  title,
  type,
  isBookmarked,
  size = 'large'
}) => {
  const ratingPercent = Math.max(0, Math.min(100, rating));
  const imageWidth = size === 'small' ? 150 : 260;
  const imageHeight = size === 'small' ? 110 : 200;
  const cardClass = size === 'small' ? 'favorites__card' : 'cities__card';
  const imageWrapperClass = size === 'small' ? 'favorites__image-wrapper' : 'cities__image-wrapper';

  return (
    <article className={`${cardClass} place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isBookmarked ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
            aria-label={isBookmarked ? 'In bookmarks' : 'To bookmarks'}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;