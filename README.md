# Node.js Express Hello World API

This is a minimal Node.js application using Express with a simple GET API endpoint for testing purposes.

## Features
- Node.js Express web server
- `/hello` GET endpoint that returns a JSON hello world message

## Requirements
- Node.js 14+
- npm (Node package manager)

## Setup & Installation
1. **Clone the repository** (if not already in the project directory):
   ```bash
   git clone <repo-url>
   cd jobseek-api
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the App
Start the Express development server:
```bash
npm start
```
The server will start at `http://127.0.0.1:5000` by default.

## API Usage
### GET `/jobs`
- **Description:** Returns a JSON array of mock job postings.
- **Request:**
  - Method: `GET`
  - URL: `http://127.0.0.1:5000/jobs`
- **Response:**
  - Status: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "title": "Senior Software Engineer",
        "company": "Tech Corp",
        "location": "San Francisco, CA",
        "salary": "$120,000 - $150,000",
        "description": "Looking for an experienced software engineer to join our team...",
        "requirements": ["5+ years of experience", "JavaScript", "React", "Node.js"]
      },
      {
        "id": 2,
        "title": "Product Manager",
        "company": "Innovate Inc",
        "location": "New York, NY",
        "salary": "$100,000 - $130,000",
        "description": "Seeking a product manager to drive our product strategy...",
        "requirements": ["3+ years of PM experience", "Agile", "Product Strategy"]
      },
      {
        "id": 3,
        "title": "UX Designer",
        "company": "Design Studio",
        "location": "Remote",
        "salary": "$90,000 - $110,000",
        "description": "Join our creative team as a UX designer...",
        "requirements": ["4+ years of UX design", "Figma", "User Research"]
      }
    ]
    ```

## Notes
- This app uses Express's built-in development server. For production, consider using a process manager like PM2 or deploying to a platform like Vercel, Render, or Railway.

## License
MIT (add your license here if different)
