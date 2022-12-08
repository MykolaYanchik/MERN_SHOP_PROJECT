import { useState } from "react";

export const useForm = ({ initialValue, onSubmit }) => {
  const [values, setValues] = useState({ ...initialValue });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};
