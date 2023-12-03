const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    savedParts: [{
        type: { type: String, enum: ['cpu', 'gpu', 'hdd', 'ram', 'ssd', 'usb'] },
        partId: { type: mongoose.Schema.Types.ObjectId, required: true }
    }],
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
