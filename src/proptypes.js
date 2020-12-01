import PropTypes from "prop-types";

export const PropTypesOffer = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  }).isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  image: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  goods: PropTypes.array.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  description: PropTypes.string.isRequired
});

export const PropTypesComments = PropTypes.arrayOf(PropTypes.shape({
  guest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}));
