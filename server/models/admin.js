const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = model("Admin", AdminSchema);
