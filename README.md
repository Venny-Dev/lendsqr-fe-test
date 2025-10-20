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

### 1. Clone the Repository

```bash
git clone https://github.com/venny-dev/lendsqr-fe-test.git
cd lendsqr-fe-test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Generate Mock Data (Optional)

If you want to use local mock data:

```bash
node generate-mock-data.cjs
```

This will create a `db.json` file with 500 mock users.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

This will start the mock API at `http://localhost:3001`

## 📜 Available Scripts

| Script             | Description                             |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Start the development server            |
| `npm run build`    | Build the production bundle             |
| `npm run preview`  | Preview the production build            |
| `npm run lint`     | Run ESLint to check code quality        |
| `npm run mock-api` | Start JSON Server for local development |
| `npm run test`     | Run unit tests with Vitest              |
| `npm run test:ui`  | Run tests with Vitest UI                |

## 📁 Project Structure

```
lendsqr/
├── public/                  # Static assets
│   ├── logo.svg
│   ├── illustration.svg
│   └── *.png               # Icons and images
├── src/
│   ├── components/         # Reusable components
│   │   ├── UserDetails/   # User details page components
│   │   └── UsersTable/    # Users table component
│   ├── hooks/             # Custom React hooks
│   │   ├── useUsers.tsx   # Users data management hook
│   │   ├── usePaginateData.tsx # Pagination hook
│   │   └── __tests__/     # Hook tests
│   │       └── useUsers.test.tsx # useUsers hook tests
│   ├── pages/             # Page components
│   │   ├── Login/         # Login page
│   │   ├── UsersOverview/ # Users dashboard
│   │   └── UserDetails/   # User details page
│   ├── routes/            # Routing configuration
│   │   ├── AppRoutes.tsx
│   │   └── routesConfig.tsx
│   ├── services/          # API services
│   │   ├── apiClient.ts   # HTTP client
│   │   └── apiEndpoint.ts # API endpoints
│   ├── styles/            # Global styles
│   │   ├── globals.scss   # Global styles
│   │   ├── mixins.scss    # SCSS mixins
│   │   └── variables.scss # SCSS variables
│   ├── ui/                # UI components
│   │   ├── ActionMenu/    # Action menu component
│   │   ├── Header/        # Header component
│   │   ├── Sidebar/       # Sidebar navigation
│   │   ├── Pagination/    # Pagination component
│   │   └── ProtectedRoute.tsx # Route protection
│   ├── utils/             # Utility functions
│   │   ├── constants.ts   # App constants
│   │   ├── data.ts        # Static data
│   │   ├── helpers.ts     # Helper functions
│   │   ├── types.ts       # TypeScript types
│   │   └── __tests__/     # Utility tests
│   │       └── helpers.test.ts # Helper function tests
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
├── .env                   # Environment variables
├── generate-mock-data.cjs # Mock data generator
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── README.md              # This file
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
