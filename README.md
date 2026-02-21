# EthioBiz Directory

EthioBiz Directory is a modern, React-based web application designed to connect Ethiopian businesses with customers through their banking affiliations. It serves as a centralized platform where users can explore businesses verified by major Ethiopian banks, fostering trust and economic growth.

## 🚀 Features

-   **Multi-Bank Portal:** distinct dashboards for major Ethiopian banks (CBE, Awash, Dashen, Zemen, etc.).
-   **Dynamic Theming:** The application interface adapts to the branding colors of the selected bank for an immersive experience.
-   **Business Directory:** Browse businesses by category, city, and bank affiliation.
-   **Advanced Search & Filtering:** Real-time search and filtering capabilities to find specific products, services, or companies.
-   **Business Details:** Comprehensive business profiles including products, services, contact info, and ratings.
-   **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
-   **Interactive UI:** Smooth transitions, hover effects, and intuitive navigation.
-   **Add Business:** Functionality to list new businesses (client-side simulation).

## 🛠️ Tech Stack

-   **Frontend Framework:** [React 18](https://reactjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Routing:** [React Router v6](https://reactrouter.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── AddBusinessModal.tsx  # Modal for adding new businesses
│   ├── BankLogo.tsx          # Smart logo component with fallbacks
│   └── DashboardLayout.tsx   # Main layout with dynamic sidebar
├── data/            # Mock data for banks and businesses
│   └── mockData.ts
├── pages/           # Page components
│   ├── About.tsx
│   ├── BankDashboard.tsx     # Landing page for specific bank
│   ├── BusinessDetail.tsx    # Detailed view of a business
│   ├── BusinessList.tsx      # Searchable list of businesses
│   ├── Contact.tsx           # Contact/Profile page
│   └── Home.tsx              # Landing page
├── types/           # TypeScript type definitions
├── App.tsx          # Main application entry with routes
└── main.tsx         # React DOM rendering
```

## 🚦 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ethiobiz-directory.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd ethiobiz-directory
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🔮 Future Roadmap

-   **Backend Integration:** Connect to a real database (PostgreSQL/MongoDB) for persistent data storage.
-   **Authentication:** Implement user accounts for business owners to manage their listings.
-   **Map Integration:** Interactive maps to show business locations.
-   **Reviews System:** Allow users to leave real reviews and ratings.
-   **Multi-language Support:** Add Amharic and Oromo language support.

## 👥 Credits

Designed and Developed by **Prof. Frehun & FadLab Technologies**.
