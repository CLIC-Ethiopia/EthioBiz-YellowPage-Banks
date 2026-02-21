# Architecture Documentation

This document outlines the architectural decisions, component structure, and data flow of the EthioBiz Directory application.

## 1. High-Level Overview

EthioBiz Directory is a **Single Page Application (SPA)** built with React and TypeScript. It uses a client-side routing strategy to simulate a multi-page experience. The application is designed to be modular, scalable, and theme-able.

## 2. Core Architectural Patterns

### 2.1 Component-Based Architecture
The UI is decomposed into small, reusable components.
-   **Layout Components:** `DashboardLayout` handles the persistent sidebar and header.
-   **Page Components:** Represent distinct views (e.g., `Home`, `BusinessList`).
-   **UI Components:** Small, focused elements like `BankLogo`, `AddBusinessModal`.

### 2.2 Dynamic Theming Strategy
Instead of a global theme provider, the application uses a **Context-aware Routing** approach for theming.
-   **Mechanism:** The `DashboardLayout` detects the current `bankId` from the URL parameters.
-   **Data Source:** It looks up the bank's metadata (including `color`) from `mockData.ts`.
-   **Application:** Inline styles and Tailwind utility classes are dynamically applied to the Sidebar, Buttons, and Headers based on the active bank's color. This allows each bank's section to feel distinct without complex CSS-in-JS libraries.

### 2.3 Data Management
Currently, the application uses a **Static Data Pattern**.
-   **Source of Truth:** `src/data/mockData.ts` contains typed arrays for `mockBanks` and `mockBusinesses`.
-   **State:** Local React State (`useState`) is used within components to handle UI states (modals, filters, search terms).
-   **Data Flow:** Data is passed down via props or retrieved directly in page components using URL parameters (e.g., filtering businesses by `bankId`).

## 3. Routing Architecture

The application uses `react-router-dom` with a nested route structure:

```tsx
<Routes>
  <Route path="/" element={<DashboardLayout />}>
    {/* General Routes */}
    <Route index element={<Home />} />
    
    {/* Bank Specific Routes */}
    <Route path="bank/:bankId" element={<BankDashboard />} />
    <Route path="bank/:bankId/businesses" element={<BusinessList />} />
    <Route path="bank/:bankId/businesses/:id" element={<BusinessDetail />} />
    
    {/* Static Pages */}
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
```

-   **Layout Wrapper:** `DashboardLayout` wraps all routes, ensuring the sidebar is always present.
-   **Dynamic Segments:** `:bankId` allows a single component (`BankDashboard`, `BusinessList`) to render content for any bank.

## 4. Key Components Breakdown

### 4.1 DashboardLayout (`src/components/DashboardLayout.tsx`)
-   **Responsibility:** Manages the global navigation sidebar and header.
-   **State:** Tracks mobile sidebar toggle state.
-   **Effect:** Handles "Scroll to Top" on route changes.
-   **Theming:** Applies the active bank's color to the sidebar background.

### 4.2 BusinessList (`src/pages/BusinessList.tsx`)
-   **Responsibility:** Displays a searchable, filterable list of businesses.
-   **Logic:**
    -   Filters global business list by `bankId`.
    -   Implements client-side search (name, description, products).
    -   Implements category and city filtering.
    -   Manages the "Add Business" modal state.

### 4.3 BankLogo (`src/components/BankLogo.tsx`)
-   **Responsibility:** Robustly renders bank logos.
-   **Logic:**
    1.  Attempts to render the image URL.
    2.  Falls back to an Icon component if provided.
    3.  Falls back to generating Initials (e.g., "CBE") if image fails.

## 5. Data Models (`src/types.ts`)

### Bank
```typescript
interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string; // Hex code used for theming
}
```

### Business
```typescript
interface Business {
  id: string;
  name: string;
  category: string;
  bankId: string; // Foreign key linking to Bank
  products: Product[];
  services: Service[];
  // ... other fields
}
```

## 6. Scalability Considerations

To scale this application for production:
1.  **State Management:** Replace local state with React Context or Redux/Zustand if global state becomes complex (e.g., user authentication).
2.  **API Integration:** Replace `mockData.ts` imports with `useEffect` hooks calling REST or GraphQL endpoints.
3.  **Image Optimization:** Implement lazy loading and image optimization for business covers and logos.
4.  **Code Splitting:** Use `React.lazy` for page components to improve initial load time.
