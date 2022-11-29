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

router.get("/api/admin/:id", async (req, res) => {
  try {
    const candidate = await Admin.findById(req.params.id);
    res.status(200).json(candidate);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/api/admin/delete/:id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted success");
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/admin/update/:id", async (req, res) => {
  try {
    let candidate = await Admin.findByIdAndUpdate(req.params.id);
    if (req.body.oldPass) {
      const isMatch = await bcrypt.compare(req.body.oldPass, candidate.pass);
      if (isMatch) {
        candidate.pass = await bcrypt.hash(req.body.newPass, 12);
        delete req.body.newPass;
        delete req.body.oldPass;
        delete req.body.pass;
      } else return res.status(400).json("Old password is not correct");
    }

    candidate = _.extend(candidate, req.body);

    await candidate.save();
    res.status(200).json(candidate);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
