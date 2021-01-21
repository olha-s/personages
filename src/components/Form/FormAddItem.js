import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  getInfoForm,
  getRace
} from "../../store/actions";
import PropTypes from "prop-types";
import "./FormAddItem.scss";

const formSchema = yup.object().shape({
  race: yup
    .string()
    .required("This field is required")
    .min(2, "Minimum length is 2 symbols"),
  name: yup
    .string()
    .required("This field is required")
    .min(2, "Minimum length is 2 symbols")
});

const FormAddItem = ({ getInfoForm, getRace, handleCloseForm }) => {
  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(false);
    getInfoForm({ id: Date.now(), ...value });
    getRace(value.race);
    handleCloseForm(false);
  };

  return (
    <Formik
      initialValues={{
        race: "",
        name: ""
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <div className="form__container">
            <div className="form__wrapper">
              <Form onSubmit={formikProps.handleSubmit} className="Form" noValidate>
                <div>
                  <label>
                    <Field component='input' type='text' name='race' placeholder='Race'
                           className="form__input"/>
                    <span><ErrorMessage name='race'/></span></label>
                  <label>
                    <Field component='input' type='text' name='name' placeholder='name'
                           className="form__input"/>
                    <span><ErrorMessage name='name'/></span></label>
                </div>
                <div>
                  <button className="form__btn" type='submit' disabled={formikProps.submitting}>Add personage
                  </button>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
FormAddItem.propTypes = {
  handleCloseForm: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfoForm: (valueForm) => dispatch(getInfoForm(valueForm)),
    getRace: (valueForm) => getRace(getInfoForm(valueForm))
  };
};
export default connect(null, mapDispatchToProps)(FormAddItem);
