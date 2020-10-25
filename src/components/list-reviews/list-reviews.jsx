import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import ReviewsForm from "../reviews-form/reviews-form";


class ListReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {comments} = this.props;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {comments.map((item, i) =>
            <Review
              key={`review-${i}`}
              review={item}
            />
          )}
        </ul>
        <ReviewsForm />
      </section>
    );
  }
}


ListReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    guest: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }),
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }))
};

export default ListReviews;
