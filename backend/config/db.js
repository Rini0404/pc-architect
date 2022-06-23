const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (err) {
    console.error(err.message.red.bold);
    process.exit(1);
  }
}

module.exports = connectDB