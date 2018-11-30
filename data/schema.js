import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Card {
        id: ID
        name: String!
        cost: Int!
        attack: Int
        health: Int
        capacities: [Capacities]
    }

    type Capacities {
        capapacity: Capacity
    }

    type Deck {
        id: ID
        name: String!
        deckstring: String!
    }

    enum Capacity {
        TAUNT
        CHARGE
        OTHER
    }

    type Query {
        getCards: [Card]
        getOneCard(id: ID!): Card
    }

    input CardInput {
        id: ID
        name: String!
        cost: Int!
        attack: Int
        health: Int
        capacities: [CapacitiesInput]
    }

    input CapacitiesInput {
        capapacity: Capacity
    }

    type Mutation {
        createCard(input: CardInput): Card
        updateCard(input: CardInput): Card
        deleteCard(id: ID!): String
    }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
export {schema};
