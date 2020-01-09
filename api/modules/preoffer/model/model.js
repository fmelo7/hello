const mongoose = require('mongoose');

const { Schema } = mongoose;

const PreOfferSchema = new Schema(
    {
        msisdn: {
            type: Number,
            trim: true,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

// TODO
// db.PreOffers.createIndex({msisdn: 1},{unique: true});

module.exports = mongoose.model('PreOffer', PreOfferSchema);
