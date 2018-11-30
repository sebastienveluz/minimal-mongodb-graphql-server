import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cards', {useNewUrlParser: true});

const cardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cost: {
        type: Number
    },
    attack: {
        type: Number
    },
    health: {
        type: Number
    },
    capacities: {
        type: Array
    }
});

const Cards = mongoose.model('cards', cardSchema);

export { Cards };
