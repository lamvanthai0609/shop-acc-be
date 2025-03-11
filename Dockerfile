# Sử dụng Node.js phiên bản LTS
FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package.json ./

# Cài đặt module-alias để hỗ trợ alias
RUN npm install module-alias

# Sao chép toàn bộ source code vào container
COPY . .

# Build TypeScript sang JavaScript
RUN npm run build

# Chạy ứng dụng
CMD ["node", "dist/index.js"]
