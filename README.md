# Node.js REST API CI/CD Pipeline (CA2)

This repository contains a production-ready CI/CD pipeline for a Node.js Express API.

## Project Structure
```text
.
├── .github/workflows/
│   └── pipeline.yml      # CI/CD Workflow
├── src/
│   ├── app.js            # Express app logic
│   └── server.js         # Entry point & server config
├── tests/
│   └── app.test.js       # API tests
├── Dockerfile            # Multi-stage build
├── .dockerignore         # Docker exclusion rules
├── .gitignore            # Git exclusion rules
└── package.json          # Scripts & Dependencies
```

## Setup Instructions

### 1. Local Development
```bash
# Install dependencies
npm install

# Run tests
npm test

# Start in development mode
npm run dev
```

### 2. Docker (Local)
Build and run the container locally to verify:
```bash
# Build the image
docker build -t node-express-app .

# Run the container
docker run -p 3000:3000 node-express-app
```
Then visit `http://localhost:3000/health`.

### 3. GitHub Setup

#### Push to GitHub
1. Create a new repository on GitHub.
 and push it on github
```

### 4. Pipeline Workflow
- **Continuous Integration**: On every push or PR, the pipeline installs dependencies and runs `npm test`.
