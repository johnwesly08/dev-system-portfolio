# Dev System Portfolio

Modern portfolio built as a two-part workspace:

- `client/` - Next.js frontend for the portfolio site
- `server/` - Express API for profile data and contact form mail delivery

## Features

- Animated portfolio sections for hero, projects, achievements, skills, and contact
- Contact form that sends email through the Node.js mail API
- Centralized profile and content data for easy updates
- Rate-limited contact endpoint to reduce spam

## Project Structure

```text
client/
  src/
    app/
    components/
    constants/
server/
  index.js
  data/
    profile.json
```

## Prerequisites

- Node.js 18 or later
- npm
- A Gmail account with an app password for the mail server

## Setup

Install dependencies for both apps:

```bash
cd client && npm install
cd ../server && npm install
```

Create `server/.env` with your mail credentials:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=destination-email@example.com
PORT=5000
```

If `EMAIL_TO` is omitted, the server falls back to `EMAIL_USER`.

## Run Locally

Start the backend first:

```bash
cd server
npm run dev
```

Then start the frontend in a second terminal:

```bash
cd client
npm run dev
```

The frontend runs on `http://localhost:3000` and the API runs on `http://localhost:5000`.

## API

- `GET /api/profile` - returns profile content from `server/data/profile.json`
- `POST /api/contact` - validates the form payload and sends an email

## Notes

- The contact form currently posts to `http://localhost:5000/api/contact`.
- The mail route requires valid Gmail app-password credentials.
