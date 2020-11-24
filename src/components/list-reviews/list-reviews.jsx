import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {Reviews} from "../reviews-form/reviews-form";
import {connect} from "react-redux";
import {postComment} from "../../store/api-action";
import withReviewsForm from "../../hock/with-reviews-form/with-reviews-form";

const ReviewsForm = withReviewsForm(Reviews);

const ListReviews = (props) => {

  const {comments, email, postCommentOnServer, id} = props;

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
      <ReviewsForm
        email={email}
        postComment={postCommentOnServer}
        id={id}
      />
    </section>
  );
}


ListReviews.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  email: PropTypes.string,
  postCommentOnServer: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER, STATE}) => ({
  email: USER.email,
  comments: STATE.comments
});

const mapDispatchToProps = (dispatch) => ({
  postCommentOnServer(id, comment) {
    dispatch(postComment(id, comment));
  }
});

export {ListReviews};
export default connect(mapStateToProps, mapDispatchToProps)(ListReviews);
