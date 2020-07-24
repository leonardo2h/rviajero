const connectDb = require('./db');

module.exports = {
  categories: async () => {
    let db;
    let menu = [];

    try {
      db = await connectDb();
      menu = await db.collection('category').find().toArray();

    } catch (error) {
      console.error(error);
    }
    return menu;
  },
};
