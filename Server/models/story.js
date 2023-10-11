const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    scenes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Scene'
        }
    ]
});

module.exports = mongoose.model('Story', storySchema);
