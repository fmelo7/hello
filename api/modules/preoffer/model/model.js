const mongoose = require('mongoose');

const { Schema } = mongoose;

const PreOfferSchema = new Schema(
    {
        msisdn: {
            type: Number,
            trim: true,
            required: 'Please fill in title',
        },
    },
    {
        timestamps: true,
    },
);

// Add full-text search index
PreOfferSchema.index({
    // "$**": "text"
    msisdn: 1,
});

module.exports = mongoose.model('PreOffer', PreOfferSchema);
