# Lendsqr Frontend Assessment

A modern, responsive admin dashboard for managing user data, built as an assessment project for Lendsqr. This application provides a comprehensive interface for viewing, filtering, and managing user information with a focus on performance, user experience, and clean code architecture.

![Lendsqr Dashboard](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## 🌟 Features

### Core Functionality

- **User Authentication**: Secure login system with protected routes
- **Users Overview Dashboard**:
  - Display users in a paginated table
  - View key statistics (Total Users, Active Users, Users with Loans, Users with Savings)
  - Filter users by organization, username, email, date, phone number, and status
  - Adjustable items per page (10, 20, 50, 100)
- **User Details Page**:
  - Comprehensive user profile information
  - Personal information, education & employment details
  - Social media links
  - Guarantor information
  - User actions (Blacklist, Activate)
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Loading States**: Skeleton loaders for better UX during data fetching
- **Toast Notifications**: Real-time feedback for user actions

### Technical Features

- **Type-Safe Development**: Full TypeScript implementation
- **Modern React Patterns**: React 19 with hooks and functional components
- **Efficient Data Fetching**: TanStack Query (React Query) for server state management
- **Client-Side Routing**: React Router v7 for seamless navigation
- **SCSS Modules**: Scoped styling with SCSS modules
- **Mock API**: JSON Server for development and testing
- **Code Quality**: ESLint configuration for consistent code style
- **Testing**: Comprehensive unit tests for hooks, utilities, and components

## 🛠️ Tech Stack

### Frontend

- **React** (v19.1.1) - UI library
- **TypeScript** (v5.9.3) - Type safety
- **Vite** (v7.1.7) - Build tool and dev server
- **React Router** (v7.9.4) - Client-side routing
- **TanStack Query** (v5.90.3) - Server state management
- **SCSS** - Styling with Sass modules

### UI & UX

- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **React Loading Skeleton** - Loading states

### Development Tools

- **ESLint** - Code linting
- **JSON Server** - Mock REST API
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vitest** - Unit testing framework
- **@testing-library/react** - React component testing utilities
- **jsdom** - DOM environment for testing

## 🚀 Getting Started

This project is split into two packages: `frontend` (React app) and `backend` (Express API). Each has its own dependencies and scripts.

### 1. Clone the Repository

```bash
git clone https://github.com/venny-dev/lendsqr-fe-test.git
cd lendsqr-fe-test
```

### 2. Install Dependencies

Install dependencies for both packages:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Seed the Database (Optional)

From the `backend` directory, run the sync script to populate `db.json` with mock users:

```bash
npm run sync-db
```

### 4. Start the Backend

```bash
# From the backend directory
npm run dev
```

The API will be available at `http://localhost:3001`

### 5. Start the Frontend

```bash
# From the frontend directory
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

### Frontend (`/frontend`)

| Script             | Description                             |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Start the Vite development server       |
| `npm run build`    | Build the production bundle             |
| `npm run preview`  | Preview the production build            |
| `npm run lint`     | Run ESLint to check code quality        |
| `npm run mock-api` | Start JSON Server for local development |
| `npm run test`     | Run unit tests with Vitest (watch mode) |
| `npm run test:ui`  | Run tests with Vitest UI                |

### Backend (`/backend`)

| Script           | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start the Express server with hot reload |
| `npm run build`  | Compile TypeScript to `dist/`            |
| `npm run start`  | Run the compiled production server       |
| `npm run test`   | Run backend tests with Vitest            |
| `npm run sync-db`| Seed `db.json` with mock data            |

## 📁 Project Structure

```
lendsqr/
├── frontend/                        # React application
│   ├── public/                      # Static assets (SVGs, PNGs, icons)
│   ├── src/
│   │   ├── components/              # Feature-specific components
│   │   │   ├── UserDetails/         # User detail section components
│   │   │   │   ├── EducationEmployment/
│   │   │   │   ├── Guarantor/
│   │   │   │   ├── PersonalInformation/
│   │   │   │   ├── Socials/
│   │   │   │   ├── UserHeader/
│   │   │   │   ├── UserProfileCard/
│   │   │   │   └── UserTabs/
│   │   │   └── UsersTable/          # Users table component
│   │   │       ├── UsersTable.tsx
│   │   │       └── UsersTable.module.scss
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useUsers.tsx         # Users data fetching & filtering
│   │   │   ├── usePaginateData.tsx  # Pagination logic
│   │   │   └── __tests__/
│   │   │       └── useUsers.test.tsx
│   │   ├── pages/                   # Route-level page components
│   │   │   ├── Login/
│   │   │   ├── UsersOverview/
│   │   │   │   ├── UsersOverview.tsx
│   │   │   │   └── UsersOverview.module.scss
│   │   │   └── UserDetails/
│   │   ├── routes/                  # Routing configuration
│   │   │   ├── AppRoutes.tsx
│   │   │   └── routesConfig.tsx
│   │   ├── services/                # API layer
│   │   │   ├── apiClient.ts         # Axios/fetch HTTP client
│   │   │   └── apiEndpoint.ts       # API endpoint definitions
│   │   ├── styles/                  # Global SCSS
│   │   │   ├── globals.scss
│   │   │   ├── mixins.scss
│   │   │   └── variables.scss
│   │   ├── test/                    # Test setup
│   │   │   └── setup.ts
│   │   ├── ui/                      # Shared/generic UI components
│   │   │   ├── ActionMenu/
│   │   │   │   ├── ActionMenu.tsx
│   │   │   │   └── ActionMenu.module.scss
│   │   │   ├── AppLayout/
│   │   │   │   ├── AppLayout.tsx
│   │   │   │   └── AppLayout.module.scss
│   │   │   ├── FilterPanel/
│   │   │   │   ├── FilterPanel.tsx
│   │   │   │   └── FilterPanel.module.scss
│   │   │   ├── Header/
│   │   │   ├── Pagination/
│   │   │   ├── Sidebar/
│   │   │   ├── StatsCard/
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   └── StatsCard.module.scss
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── SkelentonLoader.tsx
│   │   ├── utils/                   # Utility functions & types
│   │   │   ├── constants.ts
│   │   │   ├── data.ts
│   │   │   ├── helpers.ts
│   │   │   ├── types.ts
│   │   │   └── __tests__/
│   │   │       └── helpers.test.ts
│   │   ├── App.tsx                  # Root component
│   │   └── main.tsx                 # Entry point
│   ├── .env                         # Frontend environment variables
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── backend/                         # Express API server
    ├── src/
    │   ├── db/
    │   │   └── fileDb.ts            # JSON file-based data layer
    │   ├── middleware/
    │   │   └── errorHandler.ts      # Global error handling middleware
    │   ├── routes/
    │   │   └── users.ts             # User route handlers
    │   └── server.ts                # Express app entry point
    ├── scripts/
    │   └── sync-db.cjs              # Database seeding script
    ├── db.json                      # Local JSON database
    ├── .env                         # Backend environment variables
    ├── package.json
    └── tsconfig.json
```

## 🎨 Key Features Implementation

### Authentication

- Simple email-based authentication
- Protected routes using React Router
- Persistent login state using localStorage

### User Management

- Fetch and display users from API
- Filter users by multiple criteria
- Pagination with customizable page size
- View detailed user information
- User status management (Activate/Blacklist)

### Data Management

- TanStack Query for efficient data fetching and caching
- Optimistic updates for better UX
- Error handling with toast notifications
- Loading states with skeleton loaders

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Collapsible sidebar on mobile
- Touch-friendly UI elements

## 🌐 API Integration

The application connects to a REST API with the following endpoints:

- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch user by ID
- `PUT /users/:id` - Update user status

API base URL is configured via environment variable `VITE_API_BASE_URL`.

## 🧪 Testing

The application includes comprehensive unit tests to ensure code reliability and prevent regressions:

### Tested Components

- **`useUsers` Hook**: Tests data fetching, filtering, pagination, and error handling
- **`useChangeUserStatus` Hook**: Tests user status updates and mutation handling
- **`calculatePaginationButtons` Utility**: Tests pagination button generation logic

### Test Setup

- **Vitest**: Fast unit testing framework with native TypeScript support
- **@testing-library/react**: React component testing utilities
- **jsdom**: DOM environment for browser API simulation
- **Mocked Dependencies**: API calls, localStorage, and router hooks are properly mocked

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm run test -- --watch
```

## 🎯 Design Decisions

1. **React Query**: Chosen for its excellent caching, background refetching, and optimistic updates capabilities
2. **SCSS Modules**: Provides scoped styling and prevents CSS conflicts
3. **Component Composition**: Small, reusable components for better maintainability
4. **Type Safety**: Full TypeScript implementation for catching errors at compile time
5. **Protected Routes**: Ensures only authenticated users can access the dashboard
6. **Responsive Design**: Mobile-first approach with progressive enhancement
7. **Comprehensive Testing**: Unit tests for hooks and utilities to ensure reliability

## 🚀 Deployment

- The application is deployed on [Vercel](https://modestus-victor-lendsqr-fe-test.vercel.app)

## 👤 Author

**Modestus Victor**

**Note**: This is an assessment project and is not intended for production use without proper backend integration and security measures.
