import { useState } from "react";
import { validator } from "../validator";

export const useForm = ({ initialValue, onSubmit, validationSchema }) => {
  const [values, setValues] = useState({ ...initialValue });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setErrors({
      ...errors,
      [name]: validator(validationSchema[name], value),
    });
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let error in errors) {
      if (errors[error]) return;
      else onSubmit(values);
    }
  };

  return { values, handleChange, handleSubmit, errors };
};
