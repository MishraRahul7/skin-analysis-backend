const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: String, required: true, trim: true },
    cheeks: { type: String, required: true, trim: true },
    t_zone: { type: String, required: true, trim: true },
    skin_concerns: [{ type: String, require: true, trim: true }],
    allergic_ingredients: { type: String, required: true, trim: true },
    problems: [{ type: String, required: true, trim: true }],
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      }
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
