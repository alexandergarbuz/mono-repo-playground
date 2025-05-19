# Resume Service

This is a simple Node.js + Express backend service that reads a `resume.json` file from the `./data` directory and serves it as JSON via a REST API.

---

## Project Structure

```
resume-service/
├── data/
│   └── resume.json       # Your resume data in JSON format
├── index.js             # Express server setup
├── package.json         # Node.js project dependencies and scripts
```

---

## Setup and Run

### 1. Install dependencies

Navigate to the `resume-service` directory and run:

```bash
npm install
```

---

### 2. Start the service

You can start the server with:

```bash
node index.js
```

By default, the service listens on port `3000`. To change the port, set the environment variable `PORT` before running:

```bash
PORT=4000 node index.js
```

*(On Windows PowerShell, use `$env:PORT=4000` before running)*

---

### 3. Test the API

Open your browser or use a tool like Postman to access:

```
http://localhost:3000/api/resume
```

You should see the JSON content of your `resume.json` file.


### 4. Run Docker build
```
# Build the Docker image
docker build -t resume-service .

# Run the container
docker run -d -p 3000:3000 resume-service
```
The service will be available at: http://localhost:3000/api/resume

⚙️ Environment Variables

You can customize the port (or any other setting) by passing the environment variable(s):

```
docker run -d -p 8080:8080 -e PORT=8080 resume-service

```
---
