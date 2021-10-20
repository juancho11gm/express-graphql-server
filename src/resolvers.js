import { tasks } from './sample';

const root = {
  hello: () => {
    return 'Hello World';
  },

  greet: (args) => {
    const { name } = args;
    return `Hello my friend ${name}`;
  },

  tasks: () => {
    return tasks;
  },

  createTask({ input }) {
    input._id = tasks.length;
    tasks.push(input);
    return input;
  },
};

export default root;
