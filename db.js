// db.js
const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Anuradha@123',
  database: 'west_dmaag',
  schema: 'DMAAG',
  synchronize: false,
  logging: true
});

module.exports = { AppDataSource };