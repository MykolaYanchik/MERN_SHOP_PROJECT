const router = require("express").Router();
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

router.post("/api/admin/register", async (req, res) => {
  try {
    const { email, pass, roles, name, phone } = req.body;

    const candidate = await Admin.findOne({ email });

    if (candidate) return res.status(400).json("This user already exists");

    const hash = await bcrypt.hash(pass, 12);

    const newAdmin = new Admin({
      email,
      pass: hash,
      roles,
      name,
      phone,
    });

    await newAdmin.save();

    res.status(200).json(newAdmin);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/admin/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const candidate = await Admin.findOne({ email });

    if (!candidate) return res.status(400).json("Email not found.");

    const isMatch = await bcrypt.compare(pass, candidate.pass);

    if (!isMatch) return res.status(400).json("The password is incorrect");

    const token = jwt.sign({ candidateId: candidate._id }, "MERN", {
      expiresIn: "2h",
    });

    res.json({ token, candidateID: candidate._id, roles: candidate.roles });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
