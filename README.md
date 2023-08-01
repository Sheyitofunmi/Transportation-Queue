# Transportation Queue App - React (styled with Tailwind CSS)

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Welcome to the Transportation Queue App! This application is built using React and styled with Tailwind CSS. It utilizes data fetched from MiraJs API to manage the delivery queue for customers. The main purpose of this app is to provide a user-friendly planner interface where the logistics company can assign delivery slots for customers over the next 7 days, starting from the current date. The app is fully responsive and can be used on all screen sizes.

## Installation
1. Clone the repository: `git clone https://github.com/sheyitofunmi/transportation-queue-app.git`
2. Navigate to the project directory: `cd transportation-queue-app`
3. Install dependencies: `npm install`

## Features
- Display a table with the list of deliveries for customers, showing Customer ID, Customer Name, Pick Up location, and Drop off Location.
- Display a planner on the right, showing the Date and four time slots (Slot 1, Slot 2, Slot 3, Slot 4) for each day for the next 7 days.
- The planner is draggable, allowing users to drag customers from the Logistic Queue and drop them into desired time slots on the planner.
- The planner automatically saves the assigned slots to the database.

## Technologies Used
- ReactJS
- Tailwind CSS
- MiraJs API
- HTML

## Usage
1. After installation, start the application using `npm start`.
2. The application will load, and you will see the customer delivery queue on the left and the planner on the right.
3. The planner will show the current date and time slots for the next 7 days.
4. To assign a customer to a time slot, drag the customer entry from the Logistic Queue and drop it into the desired time slot in the planner.
5. The assigned slots will be automatically saved to the database.

## Screenshots
![Transportation Queue App](/screenshots/app-screenshot.png)[transportation-queue.webm](https://github.com/Sheyitofunmi/Transportation-Queue/assets/99263653/d836a495-c814-494d-84bd-d38782b61df1)

_(Add relevant screenshots here)_

## Responsive Design
The Transportation Queue App is designed to be fully responsive and can adapt to all screen sizes, including desktops, tablets, and mobile devices. The user interface elements are styled using Tailwind CSS to provide a clean and modern design.

## Contributing
We welcome contributions from the community. To contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License
This project is licensed under the [MIT License](/LICENSE). Feel free to use and modify the code as per the terms of the license.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

