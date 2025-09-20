# Shipping Box App

This repository contains a React application for managing and viewing shipping boxes. The app allows users to add new boxes, view a list of existing boxes, and manage box data through a clean user interface.

## Features

- Add new shipping boxes with relevant details
- View a list of all shipping boxes
- Responsive navigation and user interface
- Context-based state management

### Live URL:
This feature is hosted on Vercel and can be accessed here: [Shipping Box](https://shipping-box-drab.vercel.app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phanindra28/shipping-box.git
   cd shipping-box
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the app locally. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

### Building for Production

To create a production build, run:

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

## Project Structure

- `src/` - Source code for the React application
  - `assets/` - Images and static resources
  - `context/` - React context for state management
  - `data/` - Seed data for the application
  - `features/` - Feature-based components
    - `add-box/` - Components for adding new boxes
    - `list-view/` - Components for viewing the list of boxes
    - `nav-bar/` - Navigation components
  - `utils/` - Utility functions
- `public/` - Public assets
- `index.html` - Main HTML file
- `vite.config.js` - Vite configuration

## Tech Stack

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - For handling the stylings
- Context API - State management
