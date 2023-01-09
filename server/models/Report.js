import mongoose from "mongoose";
import User from './User.js';
import Annoucement from './Annoucement.js'

const ReportSchema = mongoose.Schema({
    reportingPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
      },
    annoucementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Annoucement,
        required: true
    },
    reportMessage: {
        type: String, 
        required: true
    }
});

const Report = mongoose.model('Report', ReportSchema);
export default Report;
