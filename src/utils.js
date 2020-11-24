import {sortName} from "./const";


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const randomNumber = Math.floor(Math.random() * Math.floor(100));


export const offersSort = (offers, type) => {
  switch (type) {
    case sortName.TO_HIGH:
      return offers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case sortName.TO_LOW:
      return offers.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    case sortName.TOP_RATED:
      return offers.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });
  }
  return offers;
};


export const adaptToClient = (offers) => {
  const adaptdOffers = offers.map((offer) => {
    const adaptdOffer = Object.assign(
        {},
        offer,
        {
          favorite: offer.is_favorite,
          premium: offer.is_premium,
          guests: offer.max_adults,
          image: offer.preview_image
        }
    );
    delete adaptdOffer.is_favorite;
    delete adaptdOffer.max_adults;
    delete adaptdOffer.preview_image;
    delete adaptdOffer.is_premium;

    return adaptdOffer;
  });
  return adaptdOffers;
};
