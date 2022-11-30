import { useState } from "react";

export const useForm = ({ initialValue }) => {
  const [values, setValues] = useState({ ...initialValue });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
};
