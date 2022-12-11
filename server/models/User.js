import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  sex: String,
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: 'Twoj opis',
  },
  telephone: {
    type: Number,
    required: true,
    maxLength: 9,
  },
  role: {
    type: Number,
    default: 0,
  },
  announcements: [],
  favourites: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Annoucement'
  }
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  lastSeen: {
    type: Date,
    default: Date.now(),
  },
  status: {
    isBanned: {
      type: Boolean,
    },
    cause: {
      type: String,
      default: ""
    }
  }
});

UserSchema.statics.signup = async (
  email,
  password,
  firstName,
  lastName,
  sex,
  rating,
  numReviews,
  description,
  telephone,
  role
) => {
  //walidacja

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !sex ||
    !rating ||
    !numReviews ||
    !description ||
    !telephone ||
    !role
  ) {
    throw Error('Pola nie mogą być puste!');
  }
  if (!validator.isEmail(email)) {
    throw Error('Błędny adres email');
  }
  console.log(
    email,
    password,
    firstName,
    lastName,
    sex,
    rating,
    numReviews,
    description,
    telephone,
    role
  );

  const existsEmail = await User.findOne({ email });
  const existsPhone = await User.findOne({ telephone });
  if (existsEmail) {
    const error = new Error('Podany email jest już zajęty');
    error.name = 'email';
    throw error;
  }

  if (existsPhone) {
    const error = new Error('Podany numer telefonu jest już zajęty');
    error.name = 'telephone';
    throw error;
  }

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    email,
    password: hashed_password,
    firstName,
    lastName,
    sex,
    rating,
    numReviews,
    description,
    telephone,
    role,
  });

  return newUser;
};

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Niepoprawne hasło');
  }
  throw Error('Niepoprawny email');
};

const User = mongoose.model('User', UserSchema);
export default User;
