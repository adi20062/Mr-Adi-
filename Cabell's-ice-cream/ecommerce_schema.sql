-- MS SQL Server E-Commerce Database Schema
-- Fixed: Replaced RESTRICT with NO ACTION (MS SQL syntax)

-- Create database
CREATE DATABASE ecommerce;
GO

USE ecommerce;
GO

-- Roles table
CREATE TABLE roles (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  name NVARCHAR(50) NOT NULL UNIQUE,
  description NVARCHAR(255),
  is_system BIT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE()
);

-- Users (customers & admins)
CREATE TABLE users (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  uuid CHAR(36) UNIQUE,
  email NVARCHAR(255) NOT NULL UNIQUE,
  phone NVARCHAR(30),
  password_hash NVARCHAR(255) NOT NULL,
  first_name NVARCHAR(100),
  last_name NVARCHAR(100),
  is_active BIT NOT NULL DEFAULT 1,
  email_verified BIT NOT NULL DEFAULT 0,
  last_login DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE INDEX idx_users_email ON users(email);

-- User roles (many-to-many)
CREATE TABLE user_roles (
  user_id BIGINT NOT NULL,
  role_id INT NOT NULL,
  assigned_by BIGINT NULL,
  assigned_at DATETIME NOT NULL DEFAULT GETDATE(),
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE NO ACTION,
  FOREIGN KEY (assigned_by) REFERENCES users(id)
);

-- Addresses
CREATE TABLE addresses (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  label NVARCHAR(50) DEFAULT 'home',
  recipient_name NVARCHAR(150),
  line1 NVARCHAR(255) NOT NULL,
  line2 NVARCHAR(255),
  city NVARCHAR(100),
  state NVARCHAR(100),
  postal_code NVARCHAR(30),
  country NVARCHAR(100),
  phone NVARCHAR(30),
  is_default_shipping BIT NOT NULL DEFAULT 0,
  is_default_billing BIT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_addresses_user ON addresses(user_id);

-- Categories
CREATE TABLE categories (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  name NVARCHAR(150) NOT NULL,
  slug NVARCHAR(150) NOT NULL UNIQUE,
  description NVARCHAR(MAX),
  parent_id INT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BIT NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Products
CREATE TABLE products (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  sku NVARCHAR(100) NOT NULL UNIQUE,
  name NVARCHAR(255) NOT NULL,
  slug NVARCHAR(255) NOT NULL UNIQUE,
  short_description NVARCHAR(512),
  description NVARCHAR(MAX),
  price DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  compare_at_price DECIMAL(12,2) NULL,
  tax_class NVARCHAR(100),
  weight DECIMAL(10,3),
  dimensions NVARCHAR(100),
  stock_quantity INT NOT NULL DEFAULT 0,
  stock_status NVARCHAR(50) NOT NULL DEFAULT 'in_stock'
    CHECK (stock_status IN ('in_stock', 'out_of_stock', 'backorder')),
  status NVARCHAR(50) NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'active', 'archived')),
  featured BIT NOT NULL DEFAULT 0,
  total_sales BIGINT NOT NULL DEFAULT 0,
  created_by BIGINT NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_sku ON products(sku);

-- Product <> Category many-to-many
CREATE TABLE product_categories (
  product_id BIGINT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Attributes (for variants like size, color)
CREATE TABLE attributes (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  name NVARCHAR(100) NOT NULL,
  slug NVARCHAR(100) NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE attribute_values (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  attribute_id INT NOT NULL,
  value NVARCHAR(150) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (attribute_id) REFERENCES attributes(id) ON DELETE CASCADE
);

-- Product variants
CREATE TABLE product_variants (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  product_id BIGINT NOT NULL,
  sku NVARCHAR(150),
  title NVARCHAR(255),
  price DECIMAL(12,2),
  stock_quantity INT NOT NULL DEFAULT 0,
  stock_status NVARCHAR(50) NOT NULL DEFAULT 'in_stock'
    CHECK (stock_status IN ('in_stock', 'out_of_stock', 'backorder')),
  is_default BIT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX idx_product_variants_product ON product_variants(product_id);

-- Variant <> Attribute values mapping
CREATE TABLE variant_attribute_values (
  variant_id BIGINT NOT NULL,
  attribute_value_id INT NOT NULL,
  PRIMARY KEY (variant_id, attribute_value_id),
  FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE CASCADE,
  FOREIGN KEY (attribute_value_id) REFERENCES attribute_values(id) ON DELETE CASCADE
);

-- Product images
CREATE TABLE product_images (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  product_id BIGINT NULL,
  variant_id BIGINT NULL,
  url NVARCHAR(1000) NOT NULL,
  alt NVARCHAR(255),
  sort_order INT NOT NULL DEFAULT 0,
  is_primary BIT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE CASCADE
);

CREATE INDEX idx_product_images_product ON product_images(product_id);

-- Inventory movements
CREATE TABLE inventory_movements (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  product_id BIGINT NULL,
  variant_id BIGINT NULL,
  change INT NOT NULL,
  reason NVARCHAR(255),
  reference NVARCHAR(255),
  created_by BIGINT NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (variant_id) REFERENCES product_variants(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Carts
CREATE TABLE carts (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  user_id BIGINT NULL,
  session_key NVARCHAR(128),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_carts_user ON carts(user_id);

-- Cart items
CREATE TABLE cart_items (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  cart_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  variant_id BIGINT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (variant_id) REFERENCES product_variants(id)
);

-- Wishlist
CREATE TABLE wishlists (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  name NVARCHAR(150) DEFAULT 'My Wishlist',
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE wishlist_items (
  wishlist_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  variant_id BIGINT NULL,
  added_at DATETIME NOT NULL DEFAULT GETDATE(),
  PRIMARY KEY (wishlist_id, product_id, variant_id),
  FOREIGN KEY (wishlist_id) REFERENCES wishlists(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (variant_id) REFERENCES product_variants(id)
);

-- Orders
CREATE TABLE orders (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  order_number NVARCHAR(100) NOT NULL UNIQUE,
  user_id BIGINT NULL,
  billing_address_id BIGINT NULL,
  shipping_address_id BIGINT NULL,
  currency NVARCHAR(10) NOT NULL DEFAULT 'INR',
  subtotal DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  shipping_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  tax_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  discount_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  total DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  status NVARCHAR(50) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  placed_at DATETIME NOT NULL DEFAULT GETDATE(),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (billing_address_id) REFERENCES addresses(id),
  FOREIGN KEY (shipping_address_id) REFERENCES addresses(id)
);

CREATE INDEX idx_orders_user ON orders(user_id);

-- Order items
CREATE TABLE order_items (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  order_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  variant_id BIGINT NULL,
  name NVARCHAR(255) NOT NULL,
  sku NVARCHAR(150),
  quantity INT NOT NULL DEFAULT 1,
  unit_price DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  total_price DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  tax_amount DECIMAL(12,2) DEFAULT 0.00,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (variant_id) REFERENCES product_variants(id)
);

CREATE INDEX idx_order_items_order ON order_items(order_id);

-- Order tracking / events
CREATE TABLE order_events (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  order_id BIGINT NOT NULL,
  status NVARCHAR(50) NOT NULL
    CHECK (status IN ('pending', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled', 'returned', 'refunded')),
  location NVARCHAR(255),
  note NVARCHAR(MAX),
  created_by BIGINT NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE INDEX idx_order_events_order ON order_events(order_id);

-- Payments
CREATE TABLE payments (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  order_id BIGINT NOT NULL,
  payment_method NVARCHAR(50) NOT NULL
    CHECK (payment_method IN ('upi', 'card', 'cod', 'netbanking', 'wallet', 'bank_transfer')),
  provider NVARCHAR(100),
  transaction_id NVARCHAR(255),
  amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  currency NVARCHAR(10) NOT NULL DEFAULT 'INR',
  status NVARCHAR(50) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'authorized', 'captured', 'failed', 'refunded', 'cancelled')),
  meta NVARCHAR(MAX),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE INDEX idx_payments_order ON payments(order_id);

-- Payment refunds
CREATE TABLE payment_refunds (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  payment_id BIGINT NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  reason NVARCHAR(255),
  provider_refund_id NVARCHAR(255),
  status NVARCHAR(50) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'processed', 'failed')),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE CASCADE
);

-- Product reviews & ratings
CREATE TABLE product_reviews (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  product_id BIGINT NOT NULL,
  user_id BIGINT NULL,
  order_id BIGINT NULL,
  rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title NVARCHAR(255),
  body NVARCHAR(MAX),
  approved BIT NOT NULL DEFAULT 0,
  helpful_count INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  updated_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE INDEX idx_product_reviews_product ON product_reviews(product_id);

-- Review comments / moderation
CREATE TABLE product_review_comments (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  review_id BIGINT NOT NULL,
  user_id BIGINT NULL,
  comment NVARCHAR(MAX) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (review_id) REFERENCES product_reviews(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Admin activity logs
CREATE TABLE admin_activity_logs (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  admin_id BIGINT NOT NULL,
  action NVARCHAR(255) NOT NULL,
  entity_type NVARCHAR(100),
  entity_id NVARCHAR(100),
  ip_address NVARCHAR(100),
  user_agent NVARCHAR(512),
  payload NVARCHAR(MAX),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_admin_activity_admin ON admin_activity_logs(admin_id);

-- System audit logs
CREATE TABLE system_audit_logs (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  user_id BIGINT NULL,
  action NVARCHAR(255) NOT NULL,
  resource NVARCHAR(255),
  resource_id NVARCHAR(255),
  details NVARCHAR(MAX),
  created_at DATETIME NOT NULL DEFAULT GETDATE(),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Coupons / promotions
CREATE TABLE coupons (
  id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  code NVARCHAR(100) NOT NULL UNIQUE,
  description NVARCHAR(255),
  discount_type NVARCHAR(50) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(12,2) NOT NULL,
  usage_limit INT,
  used_count INT NOT NULL DEFAULT 0,
  starts_at DATETIME,
  ends_at DATETIME,
  active BIT NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE order_coupons (
  order_id BIGINT NOT NULL,
  coupon_id BIGINT NOT NULL,
  discount_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (order_id, coupon_id),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (coupon_id) REFERENCES coupons(id) ON DELETE CASCADE
);

-- Tags (search/filtering)
CREATE TABLE tags (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  name NVARCHAR(100) NOT NULL,
  slug NVARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE product_tags (
  product_id BIGINT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (product_id, tag_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

-- Completion message
PRINT 'Database schema created successfully!';
PRINT 'All tables are ready to use.';
GO
