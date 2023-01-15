const mongoose = require("mongoose")
const Exercise = mongoose.Schema; 
const user_Schema = new Exercise({
    name: {
        type: String,
        required: true,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        validate(value) {
            if (value.length === 0) throw new Error("This is required field");
        }
    },
    activityType: {
        type: String,
        enum: ['Run', 'Bicycle Ride', 'Swim', 'Walk', 'Hike'],
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        requried: true,
        required: true,
    }
})
module.exports = mongoose.model('USER', user_Schema)