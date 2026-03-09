-- Run this in SQL Server Management Studio (SSMS)
-- As Administrator

USE master;
GO

-- Create a new SQL Server login with password
CREATE LOGIN ecommerceuser WITH PASSWORD = 'Ecommerce@123';
GO

-- Create database user in ecommerce database
USE ecommerce;
GO

CREATE USER ecommerceuser FOR LOGIN ecommerceuser;
GO

-- Give full permissions to the user
ALTER ROLE db_owner ADD MEMBER ecommerceuser;
GO

-- Verify
SELECT * FROM sys.database_principals WHERE name = 'ecommerceuser';
GO

PRINT 'User created successfully!';
PRINT 'Username: ecommerceuser';
PRINT 'Password: Ecommerce@123';
GO
