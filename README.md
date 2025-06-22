# Tracker

A modern full-stack Client-Server application built with React 19, Vite.js, and PostgreSQL.

## Tech Stack

### Client (Frontend)

- **React 19** - Latest React version with modern features
- **Vite.js** - Fast build tool and dev server
- **TypeScript** - Type safety throughout the application
- **React Router** - Client-side routing
- **TanStack Query** - Powerful data fetching and caching
- **Shadcn/ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Server (Backend)

- **Vite.js** - Fast build tool for the server
- **Express.js** - Web application framework
- **TypeScript** - Type safety
- **PostgreSQL** - Robust relational database
- **Docker** - Database containerization
- **Zod** - Schema validation
- **CORS & Helmet** - Security middleware

## Project Structure

```
tracker/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── ui/         # Shadcn UI components
│   │   ├── pages/          # Route components
│   │   ├── lib/            # Utilities and API layer
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json        # Client dependencies
├── server/                 # Express.js backend
│   ├── src/
│   │   ├── database/       # Database connection and queries
│   │   ├── routes/         # API route handlers
│   │   └── index.ts        # Server entry point
│   ├── database/
│   │   └── init.sql        # Database initialization script
│   └── package.json        # Server dependencies
├── docker-compose.yml      # PostgreSQL container configuration
└── package.json           # Workspace configuration
```

## Features

- **Item Management**: Create, read, update, and delete tracker items
- **Status Tracking**: Track items with different statuses (pending, in-progress, completed)
- **Priority System**: Organize items by priority (low, medium, high)
- **Categories**: Group items by custom categories
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Real-time Updates**: Automatic data synchronization with TanStack Query
- **Type Safety**: Full TypeScript coverage for both client and server
- **Modern UI**: Beautiful interface built with Shadcn components

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Docker** (for PostgreSQL database)

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:qpa/tracker.git
   cd tracker
   ```

2. **Install dependencies**

   ```bash
   pnpm run setup
   ```

3. **Start the PostgreSQL database**

   ```bash
   pnpm run docker:up
   ```

4. **Setup environment variables**

   ```bash
   # Copy the example environment file in the server directory
   cp server/env.example server/.env
   ```

5. **Start the development servers**
   ```bash
   pnpm run dev
   ```

This will start:

- Client at `http://localhost:5173`
- Server at `http://localhost:3001`
- PostgreSQL at `localhost:5432`

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=3001
CLIENT_URL=http://localhost:5173

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tracker
DB_USER=postgres
DB_PASSWORD=password
```

## Development

### Available Scripts

From the root directory:

- `pnpm run dev` - Start both client and server in development mode
- `pnpm run dev:client` - Start only the client development server
- `pnpm run dev:server` - Start only the server development server
- `pnpm run build` - Build both client and server for production
- `pnpm run docker:up` - Start the PostgreSQL container
- `pnpm run docker:down` - Stop the PostgreSQL container

### Database

The application uses PostgreSQL with the following schema:

- **items** table with fields:
  - `id` (Primary Key)
  - `title` (Required)
  - `description` (Optional)
  - `category` (Optional)
  - `priority` (low/medium/high)
  - `status` (pending/in-progress/completed)
  - `created_at` (Timestamp)
  - `updated_at` (Timestamp)

Sample data is automatically inserted when the server starts if the database is empty.

### API Endpoints

The server provides the following REST API endpoints:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a specific item
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item
- `GET /health` - Health check endpoint

## Architecture Decisions

### TypeScript Usage

- Uses `type` instead of `interface` throughout the application as requested
- Strict type checking enabled for both client and server
- Shared types between client and server for API consistency

### State Management

- TanStack Query for server state management
- React's built-in useState for local component state
- No additional state management library needed due to TanStack Query's capabilities

### Styling

- Tailwind CSS for utility-first styling
- Shadcn/ui for consistent, accessible components
- CSS custom properties for theme configuration

### Database

- PostgreSQL for robust data persistence
- Docker for easy development setup
- SQL triggers for automatic timestamp updates

## Production Deployment

### Building for Production

```bash
pnpm run build
```

### Environment Setup

1. Set up a PostgreSQL database
2. Configure environment variables for production
3. Deploy the server build to your hosting platform
4. Serve the client build as static files

### Docker Deployment

You can extend the existing `docker-compose.yml` to include the application containers:

```yaml
version: '3.8'

services:
  postgres:
    # ... existing configuration

  server:
    build: ./server
    ports:
      - '3001:3001'
    depends_on:
      - postgres
    environment:
      - DB_HOST=postgres

  client:
    build: ./client
    ports:
      - '80:80'
    depends_on:
      - server
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
