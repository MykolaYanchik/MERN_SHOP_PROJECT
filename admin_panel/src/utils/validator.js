export const validator = (validationSchema, value) => {
  let err = "";
  for (let key in validationSchema) {
    switch (key) {
      case "email":
        err = email(value, err, validationSchema[key]);
        break;
      case "min":
        err = min(value, err, validationSchema[key]);
        break;
      case "max":
        err = max(value, err, validationSchema[key]);
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

function email(value, error, errMessage) {
  if (
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      value
    )
  ) {
    return setError(error, "");
  } else return setError(error, errMessage);
}

function min(value, error, errMessage) {
  if (value.length < 5) {
    return setError(error, errMessage);
  } else return setError(error, "");
}

function max(value, error, errMessage) {
  if (value.length > 12) {
    return setError(error, errMessage);
  } else return setError(error, "");
}
