import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String,
        greet(name: String!): String,
        tasks: [Task]
    }

    type Task {
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }
`);

export default schema;
