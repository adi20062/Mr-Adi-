# MongoDB Connection Setup Guide

## Prerequisites
- MongoDB installed locally OR MongoDB Atlas account (cloud)
- Node.js 16+

## Option 1: Local MongoDB Setup (Windows)

1. **Install MongoDB Community Edition**
   - Download from: https://www.mongodb.com/try/download/community
   - Run the installer with default settings
   - MongoDB will run as a Windows Service

2. **Verify Installation**
   ```powershell
   mongosh
   ```
   If successful, you'll see the MongoDB shell prompt

## Option 2: MongoDB Atlas (Cloud - Recommended)

1. **Create Atlas Account**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up for free account
   - Create a new project

2. **Create Cluster**
   - Click "Create" → Choose "Free" tier
   - Wait for cluster to deploy (~5-10 minutes)

3. **Get Connection String**
   - Click "Connect" → "Drivers"
   - Select "Node.js" and version 4.1 or later
   - Copy the connection string

4. **Set Environment Variable**
   - Create `.env` file in project root:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/cabell_ice_cream?retryWrites=true&w=majority
     ```
   - Replace `username`, `password`, and cluster URL with your actual values

## Environment Variable Setup

### For Local MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/cabell_ice_cream
```

### For MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/cabell_ice_cream?retryWrites=true&w=majority
```

## Test Connection

Run the test script:
```bash
npm run db:test
```

## Database Collections

Your MongoDB will automatically have collections created for:
- `products` - Ice cream flavors and menu items
- `orders` - Customer orders
- `users` - User accounts and profiles
- `reviews` - Customer reviews

## Basic Usage in Code

```typescript
import { connectDB, getCollection } from './db/mongodb-connection.js';

// Get a collection
const products = await getCollection('products');

// Query documents
const iceCreamFlavors = await products.find({}).toArray();

// Insert
await products.insertOne({ name: 'Vanilla', price: 5.99 });

// Update
await products.updateOne({ _id: ObjectId }, { $set: { price: 6.99 } });

// Delete
await products.deleteOne({ _id: ObjectId });
```

## Troubleshooting

**Connection refused?**
- Check MongoDB is running: `mongosh`
- Ensure MongoDB service is started on Windows

**Authentication error (Atlas)?**
- Verify username/password in connection string
- Check IP whitelist allows your IP (or add 0.0.0.0/0)

**Database not created?**
- MongoDB creates db on first write operation automatically

## Helpful Tools

- **MongoDB Compass**: GUI for managing databases
  https://www.mongodb.com/products/compass
- **MongoDB Shell**: CLI tool `mongosh`
