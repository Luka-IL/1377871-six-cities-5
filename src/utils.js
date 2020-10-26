import {sortName} from "./const";


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

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

