# Monorepo Playground Project

This is a monorepo containing both frontend and backend services for the resume project.

## 🗂️ Project Structure

```
monorepo-playground/
│
├── service/
│   └── resume-service/       # Node.js + Express backend service
│
├── ui/
│   └── resume-web/           # Angular frontend (previously angular-playground)
│
├── package.json              # Root-level scripts and dependency management
└── README.md                 # You're reading it
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs root-level dependencies (like `concurrently`), but you'll also need to install frontend/backend dependencies separately:

```bash
cd service/resume-service
npm install

cd ../../ui/resume-web
npm install
```

---

### 2. Run the Apps

#### 🔧 Backend Only (Resume Service)

```bash
npm run start:service
```

Starts the Express server on the configured port (default: `3000`).

#### 🌐 Frontend Only (Resume UI)

```bash
npm run start:ui
```

Starts the Angular UI on the configured port (default: `4200`).

#### 🔄 Run Both Simultaneously

```bash
npm start
```

Uses `concurrently` to spin up both frontend and backend.

---

## 🛠️ Configuration

### Environment Variables

Each app uses its own `.env` file.

- `service/resume-service/.env`
  ```dotenv
  PORT=3000
  ```

- `ui/resume-web/.env`
  ```dotenv
  PORT=4200
  ```

You can copy from `.env.template` if a `.env` is missing.

---

## 📦 Scripts Overview (in root `package.json`)

| Script           | Description                            |
|------------------|----------------------------------------|
| `start:ui`       | Starts Angular UI                      |
| `start:service`  | Starts Node.js backend                 |
| `start`          | Starts both frontend and backend       |
