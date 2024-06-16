const mongoose = require('mongoose');

const sellBuySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        minlength: 4
    },
    costPrice: {
        type: Number,
        required: true,
        min: [1, 'Cost price value cannot be zero or negative value']
    },
    soldPrice: {
        type: Number,
        min: [1, 'Sold price value cannot be zero or negative value']
    }
});

const SellBuy = mongoose.model('SellBuy', sellBuySchema);

module.exports = SellBuy;
