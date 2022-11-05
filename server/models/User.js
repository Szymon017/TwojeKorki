import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    sex: String,
    rating: {
        type: Number,
        default: 0
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
    announcements:[],
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    lastSeen: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.statics.login = async function(email, password) {
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

const User = mongoose.model("User", UserSchema);
export default User