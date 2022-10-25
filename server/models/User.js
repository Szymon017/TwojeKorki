import mongoose from "mongoose";

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

const User = mongoose.model("User", UserSchema);
export default User