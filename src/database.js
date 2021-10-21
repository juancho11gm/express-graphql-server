import mongoose from 'mongoose';
require('dotenv').config();

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(`>>> Error ${error}`);
  }

  console.log('>>> DB is connected');
}
