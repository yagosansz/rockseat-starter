const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        // const products = await Product.find();

        const { page  = 1 } = req.query;

        // First argument would be query constraints (e.g.: where clause).
        const products = await Product.paginate({}, { page: page, limit: 10 });

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        // { new: true } -> mongoose will return the updated object
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); // Returns a Success response with no content
    }

};