const express = require('express');
const SellBuy = require('../mongoose/models/sellBuy');
const router = express.Router();

// GET /sellProduct
router.get('/sellProduct', async (req, res) => {
    try {
        let sortOption = {};
        if (req.query.sortBy === 'lowerSoldPrice') {
            sortOption.soldPrice = 1;
        } else if (req.query.sortBy === 'higherSoldPrice') {
            sortOption.soldPrice = -1;
        }

        const products = await SellBuy.find().sort(sortOption);
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
});

// POST /sellProduct
router.post('/sellProduct', async (req, res) => {
    const sellBuy = new SellBuy(req.body);
    try {
        await sellBuy.save();
        res.status(201).send('Product Added');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PATCH /sellProduct/:id
router.patch('/sellProduct/:id', async (req, res) => {
    const updates = req.body;
    try {
        const product = await SellBuy.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send('Updated Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// DELETE /sellProduct/:id
router.delete('/sellProduct/:id', async (req, res) => {
    try {
        const product = await SellBuy.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send('Deleted Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
