import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReviewsForm = (Component) => {
  class WithReviewsForm extends PureComponent {
    constructor(props) {
      super(props);
      this.postComment = props.postComment;
      this.state = {
        rating: 0,
        comment: ``,
      };
      this.postComment = this.postComment.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(evt) {
      evt.preventDefault();
      const {rating, comment} = this.state;
      this.postComment(this.props.id, {
        rating,
        comment
      });
      this.setState({
        rating: 0,
        comment: ``
      });
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      if (name === `rating`) {
        this.setState({[name]: Number(value)});
      } else {
        this.setState({[name]: value});
      }
    }

    render() {
      return (
        <Component
          rating={this.state.rating}
          comment={this.state.comment}
          handleSubmitForm={this.handleSubmitForm}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  WithReviewsForm.propTypes = {
    email: PropTypes.string,
    id: PropTypes.string.isRequired,
    postComment: PropTypes.func.isRequired,
  };
  return WithReviewsForm;
};

export default withReviewsForm;
