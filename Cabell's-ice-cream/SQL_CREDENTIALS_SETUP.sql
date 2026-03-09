-- SQL Server Credentials Setup Guide

-- 1. CHECK YOUR CURRENT SQL SERVER AUTHENTICATION MODE
-- Open SQL Server Management Studio (SSMS) and run this:

SELECT @@SERVERNAME AS 'Server Name';
GO

-- 2. IF YOU DON'T KNOW YOUR SA PASSWORD, RESET IT USING SQL SERVER CONFIGURATION MANAGER:

/*
Steps:
a) Open "SQL Server Configuration Manager" (search in Windows Start)
b) Go to SQL Server Services
c) Find your SQL Server instance (e.g., "SQL Server (MSSQLSERVER)" or "SQL Server (SQLEXPRESS)")
d) Right-click → Properties → Note the "Service account" (usually NT SERVICE\MSSQLSERVER or NETWORK SERVICE)
e) Stop the service
f) Restart in single-user mode to reset SA password
*/

-- 3. OR USE WINDOWS AUTHENTICATION (EASIER FOR LOCAL DEV):

-- First, enable Windows Authentication in SSMS:
-- - Open SSMS
-- - Right-click Server → Properties → Security
-- - Select "SQL Server and Windows Authentication mode"
-- - Restart SQL Server

-- Then in code, use Windows Auth:
-- server: 'localhost' or 'DESKTOP-YOUNAME\\SQLEXPRESS'
-- authentication: { type: 'ntlm', options: {} }  // Windows Auth, no password needed

-- 4. CREATE A NEW SQL USER WITH KNOWN PASSWORD (RECOMMENDED FOR DEVELOPMENT):

/*
In SSMS (query window), run as admin:

USE master;
GO

-- Create login
CREATE LOGIN appuser WITH PASSWORD = 'SecurePass123!';
GO

-- Create database user
USE ecommerce;
GO

CREATE USER appuser FOR LOGIN appuser;
GO

-- Give permissions
ALTER ROLE db_owner ADD MEMBER appuser;
GO
*/

-- 5. VERIFY YOUR CREDENTIALS IN SSMS:
-- Connection: Connect using your username/password
-- If it works in SSMS, it will work in Node.js

SELECT SYSTEM_USER AS 'Current User';
GO
