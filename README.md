# Retailer Frontend Application

This is a React-based frontend application for a fintech retailer, built with Vite. It provides a user interface for various financial services, including bill payments, money transfers, and reporting.

## Technologies Used

*   **Framework:** React
*   **Build Tool:** Vite
*   **State Management:** Redux Toolkit
*   **Routing:** React Router DOM
*   **Styling:** Tailwind CSS
*   **UI Components:** React Icons
*   **Form Management:** React Hook Form
*   **PDF Generation:** jspdf, jspdf-autotable
*   **Spreadsheet Processing:** xlsx
*   **Animation:** @react-spring/web

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd retailer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Project

To start the development server:

```bash
npm run dev
```

This will typically start the application on `http://localhost:5173` (or another available port).

## Building for Production

To build the application for production:

```bash
npm run build
```

This command will compile and optimize the project files into the `dist` directory.

## Project Structure

The project follows a standard React application structure:

*   `public/`: Static assets.
*   `src/`: Main application source code.
    *   `assets/`: Static assets used within components.
    *   `components/`: Reusable UI components.
    *   `context/`: React Context API for global state management.
    *   `hooks/`: Custom React hooks.
    *   `pages/`: Top-level components representing different views/pages of the application.
        *   `AgentReports/`: Components related to agent reports.
        *   `AgentSelfBank/`: Components for agent self-banking.
        *   `Authentication/`: Components for user authentication (Login, Register, etc.).
        *   `BalanceRequest/`: Components for balance requests.
        *   `Home/`: Dashboard and main application entry points.
        *   `PayBills/`: Components for bill payment functionalities.
        *   `Settlement/`: Components for settlement processes.
        *   `TalkalWallet/`: Components for Talkal Wallet features.
        *   `WalletToWallet/`: Components for wallet-to-wallet transfers.
    *   `utils/`: Utility functions and helpers.
    *   `App.jsx`: Main application component.
    *   `main.jsx`: Entry point for the React application.
    *   `store.js`: Redux store configuration.
    *   `App.css`, `index.css`, `tailwind.css`: Global styles.