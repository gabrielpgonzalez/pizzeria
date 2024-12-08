import React from "react";
import PropTypes from "prop-types";
import { Form as BootstrapForm, Button, Alert } from "react-bootstrap";
import "../assets/Styles/Form.css";

const Form = ({
  inputs,
  onSubmit,
  setValue,
  submitButton,
  title,
  alertMessage,
}) => {
  const [errors, setErrors] = React.useState({});
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleChange = (prop, value) => {
    setValue((prev) => ({ ...prev, [prop]: value }));

    const input = inputs.find((i) => i.prop === prop);
    const error = input?.invalid?.();
    setErrors((prev) => ({ ...prev, [prop]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = inputs.reduce((acc, input) => {
      const error = input.invalid();
      if (error) acc[input.prop] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormSubmitted(false);
      return;
    }

    onSubmit();
    setFormSubmitted(true);
  };

  return (
    <div className="custom-form-container">
      <div className="form-header">
        <h2>{title}</h2>
      </div>
      <BootstrapForm onSubmit={handleSubmit} className="custom-form">
        {inputs.map(({ id, label, type, prop, required }) => (
          <BootstrapForm.Group className="mb-3" controlId={id} key={id}>
            <BootstrapForm.Label className="custom-label">
              {label}
            </BootstrapForm.Label>
            <BootstrapForm.Control
              type={type}
              required={required}
              onChange={(e) => handleChange(prop, e.target.value)}
              isInvalid={!!errors[prop]}
              className="custom-input"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              {errors[prop]}
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>
        ))}
        <Button
          variant="success"
          type="submit"
          className="w-100 custom-submit-btn"
        >
          {submitButton}
        </Button>
        {formSubmitted && (
          <Alert variant="success" className="mt-3 text-center custom-alert">
            {alertMessage}
          </Alert>
        )}
      </BootstrapForm>
    </div>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      prop: PropTypes.string.isRequired,
      required: PropTypes.bool,
      invalid: PropTypes.func,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  submitButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

export default Form;
