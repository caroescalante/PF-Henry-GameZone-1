const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config()
const { PORT } = process.env || 3001

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at server deploy', PORT);
  });
});