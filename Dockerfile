# Sử dụng Node.js LTS làm base image
FROM node:20

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json trước để tối ưu hóa layer caching
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Biên dịch TypeScript sang JavaScript
#RUN npm run build

# Expose cổng server chạy
EXPOSE 3100

# Lệnh chạy ứng dụng
CMD ["npm", "run", "dev"]
