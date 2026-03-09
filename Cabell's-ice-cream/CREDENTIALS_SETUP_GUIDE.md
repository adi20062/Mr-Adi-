# SQL Server Credentials Setup - Quick Guide

## Option 1: Windows Authentication (Easiest for Local Development) ✅ RECOMMENDED

अगर तुम अपने PC पर SQL Server installed है, तो Windows auth सबसे आसान है।

### Step 1: Enable Windows Authentication in SQL Server
```
1. Open SQL Server Management Studio (SSMS)
2. Right-click on Server name → Properties
3. Go to "Security" tab
4. Select "SQL Server and Windows Authentication mode"
5. Click OK
6. Restart SQL Server (Services → SQL Server (MSSQLSERVER/SQLEXPRESS) → Restart)
```

### Step 2: Update connection file

Edit `db/mssql-connection.js`:

```javascript
const config = {
  server: 'localhost', // or your server name
  database: 'ecommerce',
  authentication: {
    type: 'default',  // Windows Authentication
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableKeepAlive: true,
  },
};
```

---

## Option 2: SQL Server Authentication (SA Account)

अगर तुम्हें SA password नहीं पता, तो नया user बना लो।

### Step 1: Open SSMS and create a new user

```sql
USE master;
GO

-- Create login with password
CREATE LOGIN appuser WITH PASSWORD = 'YourPassword@123';
GO

USE ecommerce;
GO

-- Create database user
CREATE USER appuser FOR LOGIN appuser;
GO

-- Give full permissions
ALTER ROLE db_owner ADD MEMBER appuser;
GO
```

### Step 2: Update connection file

Edit `db/mssql-connection.js`:

```javascript
const config = {
  server: 'localhost', // या DESKTOP-ABC\\SQLEXPRESS
  database: 'ecommerce',
  authentication: {
    type: 'default',
    options: {
      userName: 'appuser',
      password: 'YourPassword@123',
    },
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableKeepAlive: true,
  },
};
```

---

## Option 3: Find Your Server Name & Existing Credentials

### Check Server Name:
1. Open **SSMS**
2. Look at top-left: `Server name: DESKTOP-ABC\SQLEXPRESS` (या कुछ और)
3. Copy that name

### Find Default Credentials:
- **Default SA password**: Check your SQL Server installation notes / email
- **Windows Auth**: No password needed (uses your Windows login)

---

## Quick Test करो

PowerShell में:
```powershell
cd c:\Users\adity\OneDrive\Desktop\Cabell's-ice-cream
npm run db:test
```

अगर success → ✓ सब ठीक है
अगर error → बताना, fix कर देंगे

---

## Common Server Names:
- `localhost`
- `DESKTOP-YOURNAME\MSSQLSERVER`
- `DESKTOP-YOURNAME\SQLEXPRESS` (Express version)
- IP address: `127.0.0.1`

तुम्हारा **server name** क्या है? (SSMS में ऊपर देख, या यहाँ बताएगा)
