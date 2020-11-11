import React, {PureComponent} from "react";

const withReviewsForm = (Component) => {
  class WithReviewsForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        review: ``
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          handleSubmitForm={this.handleSubmitForm}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return WithReviewsForm;
};

export default withReviewsForm;
