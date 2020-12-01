import {SortName} from "./const";


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const randomNumber = Math.floor(Math.random() * Math.floor(100));


export const offersSort = (offers, type) => {
  switch (type) {
    case SortName.TO_HIGH:
      return offers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case SortName.TO_LOW:
      return offers.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    case SortName.TOP_RATED:
      return offers.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
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
  const adaptOffers = offers.map((offer) => {
    const adaptOffer = Object.assign(
        {},
        offer,
        {
          favorite: offer.is_favorite,
          premium: offer.is_premium,
          guests: offer.max_adults,
          image: offer.preview_image,
          host: {
            avatar: offer.host.avatar_url,
            pro: offer.host.is_pro,
            name: offer.host.name,
            id: offer.host.id,
          }
        }
    );
    delete adaptOffer.is_favorite;
    delete adaptOffer.max_adults;
    delete adaptOffer.preview_image;
    delete adaptOffer.is_premium;
    delete adaptOffer.host.is_pro;
    delete adaptOffer.host.avatar_url;

    return adaptOffer;
  });
  return adaptOffers;
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
    redirect(`/login`);
  }
};

export const getOffersInCity = (offers, city) => {
  return offers.filter((item) => (item.city.name === city));
};
