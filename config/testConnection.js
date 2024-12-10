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
    logging: false,
    entities: [
        require('./models/GsuTable'),
        require('./models/TroyTable')
    ]
});

async function testConnection() {
    try {
        await AppDataSource.initialize();
        console.log('Connection to PostgreSQL database has been established successfully.');
        
        // Execute test queries
        const gsuCountResult = await AppDataSource.query('SELECT COUNT(*) FROM "DMAAG"."GSU"');
        const troyCountResult = await AppDataSource.query('SELECT COUNT(*) FROM "DMAAG"."TROY"');
        
        console.log('GSU table count:', gsuCountResult[0].count);
        console.log('Troy table count:', troyCountResult[0].count);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await AppDataSource.destroy();
    }
}

testConnection();
