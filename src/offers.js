export const getOffers = (offers, city) => {
  return offers.filter((item) => (item.city.name === city));
};
