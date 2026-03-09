import dotenv from 'dotenv';
import { connectDB, closeDB } from '../db/mongodb-connection.js';

dotenv.config();

async function testConnection() {
    try {
        console.log('🔌 Testing MongoDB connection...\n');

        const db = await connectDB();
        console.log('✓ Connected to database: cabell_ice_cream\n');

        // Test creating a collection and inserting a document
        const testCollection = db.collection('test');
        const result = await testCollection.insertOne({
            timestamp: new Date(),
            message: 'Connection test successful!'
        });

        console.log('✓ Test document inserted with ID:', result.insertedId);

        // Read it back
        const doc = await testCollection.findOne({ _id: result.insertedId });
        console.log('✓ Test document retrieved:', doc);

        // Clean up
        await testCollection.deleteOne({ _id: result.insertedId });
        console.log('✓ Test document cleaned up\n');

        console.log('✅ MongoDB connection test PASSED!');

    } catch (err) {
        console.error('❌ Connection test FAILED:', err.message);
        process.exit(1);
    } finally {
        await closeDB();
    }
}

testConnection();
