CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password CHAR(32) NOT NULL, -- MD5 Hash
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0.00,
    numberPhone VARCHAR(20),
    status ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE',
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE account_general_information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    priceAtm DECIMAL(10,2) NOT NULL,
    priceCard DECIMAL(10,2) NOT NULL,
    discount DECIMAL(5,2) DEFAULT 0.00,
    username VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    status ENUM('Còn hàng', 'Đã bán') NOT NULL DEFAULT 'Còn hàng', 
    categoryId INT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE account_specific_information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    accountId INT,
    FOREIGN KEY (accountId) REFERENCES account_general_information(id) ON DELETE CASCADE
);

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    accountId INT,
    FOREIGN KEY (accountId) REFERENCES account_general_information(id) ON DELETE CASCADE
);

CREATE TABLE recharges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT, 
    denomination DECIMAL(10,2) NOT NULL, -- Mệnh giá
    networkType ENUM('Viettel', 'Vinaphone', 'Mobifone'),
    oldBalance DECIMAL(10,2) NOT NULL,
    newBalance DECIMAL(10,2) NOT NULL,
    method ENUM('ATM', 'CARD') NOT NULL,
    status ENUM('Thành công', 'Đang chờ', 'Thất bại') DEFAULT 'Đang chờ',
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    type ENUM('Dịch Vụ', 'Mua Account') NOT NULL,
    accountId INT NULL,
    serviceId INT NULL,
    amount DECIMAL(10,2) NOT NULL,
    finalBalance DECIMAL(10,2) NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (accountId) REFERENCES account_general_information(id) ON DELETE SET NULL,
    FOREIGN KEY (serviceId) REFERENCES services(id) ON DELETE SET NULL
);

