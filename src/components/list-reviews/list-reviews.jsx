import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {Reviews} from "../reviews-form/reviews-form";
import {connect} from "react-redux";
import {postComment} from "../../store/api-action";
import {commentsSort} from "../../utils";
import withReviewsForm from "../../hocs/with-reviews-form/with-reviews-form";
import {AuthorizationStatus} from "../../const";
import {PropTypesComments} from "../../proptypes";

const ReviewsForm = withReviewsForm(Reviews);

const ListReviews = (props) => {

  const {comments, email, postCommentOnServer, id, authorizationStatus} = props;
  const MAX_COMMENTS = 10;
  const sortComments = commentsSort(comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortComments.map((item, i) => {
          while (i < MAX_COMMENTS) {
            return <Review
              key={`review-${i}`}
              review={item}
            />;
          }
          return ``;
        }
        )
        }
      </ul>
      {(authorizationStatus === AuthorizationStatus.AUTH) ?
        <ReviewsForm
          email={email}
          postComment={postCommentOnServer}
          id={id}
        /> :
        ``
      }
    </section>
  );
};


ListReviews.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypesComments,
  email: PropTypes.string,
  postCommentOnServer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = ({USER, STATE}) => ({
  email: USER.email,
  comments: STATE.comments,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  postCommentOnServer(id, comment) {
    dispatch(postComment(id, comment));
  }
});

export {ListReviews};
export default connect(mapStateToProps, mapDispatchToProps)(ListReviews);
