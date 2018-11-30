import mongoose from 'mongoose';
import { Cards } from './dbConnectors';

// resolver map
export const resolvers = { 
    Query: {
        getCards: () => {
            return Cards.find({});
        },
        getOneCard: (root, { id }) => {
            return new Promise((resolve, object) => {
                Cards.findById(id, (err, card) => {
                    if (err) reject(err)
                    else resolve(card)
                });
            });
        },
    },
    Mutation: {
        createCard: (root, {input}) => {
            const newCard = new Cards({
                name: input.name,
                cost: input.cost,
                attack: input.attack,
                health: input.health,
                capacities: input.capacities
            });

            newCard.id = newCard._id;

            return new Promise ((resolve, object) => {
                newCard.save((err) => {
                    if (err) reject(err)
                    else resolve(newCard)
                });
            });
        },
        updateCard: (root, { input }) => {
            return new Promise(( resolve, object ) => {
                Cards.findOneAndUpdate({ _id: input.id}, input, {new: true}, (err, card) => {
                    if (err) reject(err)
                    else resolve(card)
                });
            });
        },
        deleteCard: (root, { id }) => {
            return new Promise((resolve, object) => {
                Cards.remove({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve('Sucessfully deleted card')
                });
            });
        }
    },
};

export default resolvers;
