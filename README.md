# Tracker

A full-stack Client-Server application built with React 19, Vite.js, and PostgreSQL.

## Tech Stack

### Client (Frontend)

- **React 19** - Latest React version with modern features
- **Vite.js** - Fast build tool and dev server
- **TypeScript** - Type safety throughout the application
- **React Router** - Client-side routing
- **TanStack Query** - Powerful data fetching and caching
- **TanStack Virtual** - Headless UI for virtualizing large element lists
- **Shadcn/ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Server (Backend)

- **Vite.js** - Fast build tool for the server
- **Express.js** - Web application framework
- **TypeScript** - Type safety
- **PostgreSQL** - Robust relational database
- **Containerd** - Database containerization
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
└── package.json            # Workspace configuration
```

## Screenshots

### Application Overview

![Home Page](screenshots/HomePage.png 'Tracker Home Page')

### Item Stage Management

![Item Stage Management](screenshots/HomePage-StageManagement.png 'Item Stage Management on the Home Page')

### Create Item

![Create Item Page](screenshots/CreateItemPage.png 'Detailed view of create item page')

### Edit Item and Details

![Edit Item Page](screenshots/EditItemPage.png 'Detailed view of edit item page')

### Stage Progress

![Stage Progress](screenshots/EditItemPage-StageProgress.png 'Advance items between stages')

### Timeline Visualization

![Timeline View](screenshots/EditItemPage-Timeline.png 'Item progress timeline')

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Containerd** (for PostgreSQL database)

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
   pnpm run containerd:up
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

## Screenshots

### Application Overview

![Application Home Page](screenshots/home-page.png 'Tracker application showing the main dashboard')

### Item Management

![Create New Item](screenshots/create-item.png 'Form for creating new tracking items')

![Item Details](screenshots/item-details.png 'Detailed view with timeline and progress information')

### Timeline Visualization

![Timeline Progress](screenshots/timeline-view.png 'Visual timeline showing item progression through stages')

## Development

### Available Scripts

From the root directory:

- `pnpm run dev` - Start both client and server in development mode
- `pnpm run dev:client` - Start only the client development server
- `pnpm run dev:server` - Start only the server development server
- `pnpm run build` - Build both client and server for production
- `pnpm run Containerd:up` - Start the PostgreSQL container
- `pnpm run Containerd:down` - Stop the PostgreSQL container

### Database

The application uses PostgreSQL with the following schema:

#### Main Tables

- **items** table with fields:
  - `id` (SERIAL PRIMARY KEY)
  - `name` (VARCHAR(255) NOT NULL) - Item name/title
  - `supplier` (VARCHAR(255) NOT NULL) - Supplier/vendor name
  - `stage` (VARCHAR(50) NOT NULL) - Current stage with CHECK constraint
    - Valid values: 'Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored'
  - `creation_time` (TIMESTAMP WITH TIME ZONE NOT NULL) - When item was created
  - `expected_time` (TIMESTAMP WITH TIME ZONE NOT NULL) - Expected completion time
  - `update_time` (TIMESTAMP WITH TIME ZONE) - Last update timestamp (auto-managed)

- **item_timeline** table with fields:
  - `id` (SERIAL PRIMARY KEY)
  - `item_id` (INTEGER NOT NULL) - Foreign key to items table
  - `stage` (VARCHAR(50) NOT NULL) - Stage name with CHECK constraint
    - Valid values: 'Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored'
  - `entered_time` (TIMESTAMP WITH TIME ZONE NOT NULL) - When item entered this stage
  - `expected_exit_time` (TIMESTAMP WITH TIME ZONE) - Expected exit time from stage

#### Database Features

- **Indexes** for optimized queries on stage, timestamps, and foreign keys
- **Triggers** for automatic timestamp updates on items table
- **CASCADE DELETE** on timeline entries when items are deleted
- **CHECK constraints** to ensure valid stage values
- **Comprehensive sample data** with 70+ items for testing and virtualization

Sample data is automatically inserted when the server starts if the database is empty.

### API Endpoints

The server provides the following REST API endpoints:

#### Items Management

- `GET /api/items` - Get all items (ordered by creation_time DESC)
- `GET /api/items/:id` - Get a specific item with its complete timeline
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item (partial updates supported)
- `DELETE /api/items/:id` - Delete an item (cascade deletes timeline entries)

#### Timeline & Stage Management

- `GET /api/items/:id/timeline` - Get timeline entries for a specific item
- `PUT /api/items/:id/stage` - Update item stage (automatically manages timeline)

#### System Endpoints

- `GET /health` - Health check endpoint

#### Request/Response Formats

**Create Item (POST /api/items)**

```json
{
  "name": "string (required)",
  "supplier": "string (required)",
  "stage": "Created | In Transit | Arrived at Dock | Inspected | Stored (optional, defaults to Created)",
  "expected_time": "ISO datetime string (required)"
}
```

**Update Item (PUT /api/items/:id)**

```json
{
  "name": "string (optional)",
  "supplier": "string (optional)",
  "stage": "Created | In Transit | Arrived at Dock | Inspected | Stored (optional)",
  "expected_time": "ISO datetime string (optional)"
}
```

**Update Stage (PUT /api/items/:id/stage)**

```json
{
  "stage": "Created | In Transit | Arrived at Dock | Inspected | Stored (required)",
  "expected_time": "ISO datetime string (optional)"
}
```

All endpoints include comprehensive error handling with appropriate HTTP status codes and detailed error messages. Request validation is handled using Zod schemas.

## Architecture Decisions

### TypeScript Usage

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
- Containerd for easy development setup
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

### Containerd Deployment

You can extend the existing `containerd-compose.yml` to include the application containers:

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

## License

This project is licensed under the ISC License.
