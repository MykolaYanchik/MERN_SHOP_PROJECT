export const validator = (validationSchema, value) => {
  let err = "";
  for (let key in validationSchema) {
    switch (key) {
      case "email":
        err = email(value, err);
        break;
      case "min":
        err = min(value, err);
        break;
      case "max":
        err = max(value, err);
        break;
    }
  }
  return err;
};

function setError(error, msg) {
  if (error.length === 0) {
    error = msg;
  } else error = error + " " + msg;
  return error;
}

function email(value, error) {
  if (value.length === 0) {
    return setError(error, "failed email");
  } else return setError(error, "");
}

function min(value, error) {
  if (value.length < 5) {
    return setError(error, "too short pass");
  } else return setError(error, "");
}

function max(value, error) {
  if (value.length > 12) {
    return setError(error, "too long pass");
  } else return setError(error, "");
}
