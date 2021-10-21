import { tasks } from './sample';

import User from './models/User';

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

  users: async () => {
    return await User.find();
  },

  createTask({ input }) {
    input._id = tasks.length;
    tasks.push(input);
    return input;
  },

  async createUser({ input }) {
    const newUser = new User(input);
    await newUser.save();
    return newUser;
  },

  async deleteUser({ _id }) {
    return await User.findByIdAndDelete(_id);
  },

  async updateUser({ _id, input }) {
    return await User.findByIdAndUpdate(_id, input);
  },
};

export default root;
