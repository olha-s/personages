import React from "react";
import PropTypes from "prop-types";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  getInfoFormName
} from "../../store/actions";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .min(2, "Minimum length is 2 symbols")
});

const FormChangeName = ({ name, id, race, getInfoFormName, handleCloseForm }) => {

  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(false);
    getInfoFormName({ id, ...value, race });
    handleCloseForm(false);
  };

  return (
    <Formik
      initialValues={{
        name: " "
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {

        return (
          <Form onSubmit={formikProps.handleSubmit} className="Form" noValidate>
            <div className="Form__input-wrapper">
              <label>
                <Field component='input' type='text' name='name' placeholder={name}
                       className="Form__input"/>
                <span className="Form__msg"><ErrorMessage name='name'/></span></label>
            </div>
            <div>
              <button className="Form__btn" type='submit' disabled={formikProps.submitting}>Change
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
FormChangeName.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleCloseForm: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfoFormName: (valueForm) => dispatch(getInfoFormName(valueForm))
  };
};
export default connect(null, mapDispatchToProps)(FormChangeName);