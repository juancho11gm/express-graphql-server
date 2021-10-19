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
};

export default root;
