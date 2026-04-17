# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .


# RUN npm run build

# Production Stage
FROM node:20-alpine AS runner

# Create a non-root user for security
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

WORKDIR /app

# Copy production dependencies and built assets
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Use the non-root user
USER nodejs

EXPOSE 3000

CMD ["node", "src/server.js"]
