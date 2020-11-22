export const getOffersInCity = (offers, city) => {
  return offers.filter((item) => (item.city.name === city));
};
