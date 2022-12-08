export const validator = (validationSchema, value) => {
  let err = "";
  for (let key in validationSchema) {
    switch (key) {
      case "email":
        err = email(value, err);
        break;
      case "pass":
        err = pass(value, err);
        break;
    }
  }
  return err;
};

function setError(error, msg) {
  if (error.length === 0) {
    error = msg;
  } else error = error + ", " + msg;
  return error;
}

function email(value, error) {
  if (value.length === 0) {
    return setError(error, "too short email");
  } else return setError(error, "");
}

function pass(value, error) {
  if (value.length === 0) {
    return setError(error, "too short pass");
  } else return setError(error, "");
}
