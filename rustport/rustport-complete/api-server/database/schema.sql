CREATE DATABASE IF NOT EXISTS rustport CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE rustport;

CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  steam_id VARCHAR(32) NOT NULL UNIQUE,
  display_name VARCHAR(100) NOT NULL,
  avatar_url TEXT,
  role ENUM('user','admin') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS servers (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  owner_id BIGINT UNSIGNED NULL,
  external_id VARCHAR(100) NULL UNIQUE,
  name VARCHAR(150) NOT NULL,
  address VARCHAR(255) NOT NULL,
  short_description VARCHAR(160),
  description TEXT,
  region VARCHAR(30),
  icon_url TEXT,
  banner_url TEXT,
  tags JSON,
  players INT DEFAULT 0,
  max_players INT DEFAULT 0,
  ping INT DEFAULT 0,
  position INT NULL,
  listing_tier ENUM('community','featured','premium') DEFAULT 'community',
  slot_number INT NULL,
  price DECIMAL(10,2) DEFAULT 0,
  status ENUM('draft','active','expired','disabled') DEFAULT 'draft',
  starts_at DATETIME NULL,
  expires_at DATETIME NULL,
  renewal_canceled_at DATETIME NULL,
  last_icon_change_at DATETIME NULL,
  last_banner_change_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_server_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_server_position(position),
  INDEX idx_server_tier(listing_tier),
  INDEX idx_server_status(status)
);

CREATE TABLE IF NOT EXISTS server_images (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  server_id BIGINT UNSIGNED NOT NULL,
  image_url TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_image_server FOREIGN KEY (server_id) REFERENCES servers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS favorites (
  user_id BIGINT UNSIGNED NOT NULL,
  server_id BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, server_id),
  CONSTRAINT fk_favorite_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_favorite_server FOREIGN KEY (server_id) REFERENCES servers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS server_analytics (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  server_id BIGINT UNSIGNED NOT NULL,
  event_type ENUM('view','favorite','connect','copy','bump') NOT NULL,
  user_id BIGINT UNSIGNED NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_analytics_server FOREIGN KEY (server_id) REFERENCES servers(id) ON DELETE CASCADE,
  INDEX idx_analytics_server_type(server_id,event_type),
  INDEX idx_analytics_created(created_at)
);

CREATE TABLE IF NOT EXISTS payments (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NULL,
  server_id BIGINT UNSIGNED NULL,
  stripe_checkout_id VARCHAR(255) UNIQUE,
  stripe_subscription_id VARCHAR(255) NULL,
  payment_type ENUM('listing','bump') NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(8) DEFAULT 'usd',
  status VARCHAR(40) NOT NULL,
  refundable_until DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  author_id BIGINT UNSIGNED NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content LONGTEXT,
  featured_image_url TEXT,
  status ENUM('draft','published') DEFAULT 'published',
  views BIGINT UNSIGNED DEFAULT 0,
  published_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_images (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  blog_post_id BIGINT UNSIGNED NOT NULL,
  image_url TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  CONSTRAINT fk_blog_image_post FOREIGN KEY (blog_post_id) REFERENCES blog_posts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(40),
  subject VARCHAR(190) NOT NULL,
  message TEXT NOT NULL,
  attachment_url TEXT,
  status ENUM('new','read','replied','closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
