# 🛍️ E-Commerce Product Dashboard

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![MaterialUI](https://img.shields.io/badge/MaterialUI-7.0.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)

<img width="952" alt="image" src="https://github.com/user-attachments/assets/243b7d87-2601-4058-9213-5aa57b5f4343" />
<img width="924" alt="image" src="https://github.com/user-attachments/assets/383d8e37-49a7-41e5-8dee-28dc9a7370fa" />
<img width="596" alt="image" src="https://github.com/user-attachments/assets/e3dba7c6-0f85-45a7-b2ff-74f208bbf051" />



A responsive product dashboard built with React and Material UI that allows users to browse products, view details, and manage a cart with persistent storage.


## ✨ Features

- **Product Listing** with images, prices, and ratings
- **Advanced Filtering** by category
- **Sorting** by price (low-high/high-low)
- **Search Functionality** with debounced input
- **Product Details Modal** with full specifications
- **Persistent Cart** using localStorage
- **Dark/Light Theme** toggle
- **Responsive Design** works on all devices
- **Animations** with Framer Motion
- **SweetAlert2** for beautiful notifications

## 🛠️ Technologies Used

- React.js (v18)
- TypeScript
- Material UI (v7) - For UI components and styling
- Zustand - State management
- Framer Motion - Animations
- React Router - Navigation
- SweetAlert2 - Alert notifications
- FakeStoreAPI - Product data


## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/product-dashboard.git
```

2. Navigate to the project directory:
```bash
cd product-dashboard
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running the App

Start the development server:
```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🏗️ Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── Cart/         # Cart related components
│   ├── Product/      # Product cards and modals
│   ├── Layout/       # App layout components
│   └── UI/           # Generic UI elements
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── services/         # API service functions
├── store/            # Zustand state management
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx           # Main application component
└── index.tsx         # Application entry point
```

## Available Scripts

- `start`: Runs the app in development mode
- `build`: Builds the app for production
- `test`: Runs tests
- `eject`: Ejects from Create React App (not recommended)

## 📦 Key Packages
- @mui/material: Material UI core components
- @emotion/react: CSS-in-JS styling solution
- @emotion/styled: Styled components for Material UI
- @mui/icons-material: Material UI icons
- sweetalert2: Beautiful alert notifications
- zustand: State management
- framer-motion: Animation library
- react-router-dom: Routing solution

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Your Name - rutu210301@gmail.com

Project Link: https://github.com/Rutu210301/product-dashboard
