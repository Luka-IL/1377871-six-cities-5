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
export const commentsSort = (comments) => comments.sort((a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
});

export const adaptOffersToClient = (offers) => {
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

export const adaptCommentToClient = (comments) => {
  const adaptdComments = comments.map((comment) => {
    const adaptdComment = Object.assign(
        {},
        comment,
        {
          user:
          {
            avatar: comment.user.avatar_url,
            pro: comment.user.is_pro,
            name: comment.user.name,
            id: comment.user.id,

          }
        }
    );
    delete adaptdComment.avatar_url;
    delete adaptdComment.is_pro;

    return adaptdComment;
  });
  return adaptdComments;
};

export const formatDate = (date) => {
  let monthNames = [
    `January`, `February`, `March`,
    `April`, `May`, `June`, `July`,
    `August`, `September`, `October`,
    `November`, `December`
  ];

  date = new Date(date);
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return day + ` ` + monthNames[monthIndex] + ` ` + year;
};

export const onClickSingIn = (status, redirect) => {
  if (status === `AUTH`) {
    redirect(`/favorites`);
  } else {
    redirect(`/`);
  }
};
/*
export const getLocationCity = (city) => {
  switch (city) {
    case cities.AMSTERDAM:
      return {
        name: cities.AMSTERDAM,
        location: [52.37454, 4.897976]
      };
    case cities.BRUSSELS:
      return {
        name: cities.AMSTERDAM,
        location: [52.37454, 4.897976]
      };
  }
}*/
