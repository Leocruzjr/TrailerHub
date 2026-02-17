🎬 TrailerHub

TrailerHub is a Netflix-inspired frontend web application built with React that allows users to browse movies, watch trailers, and manage a personalized watchlist. The project demonstrates real-world frontend engineering skills including component architecture, authentication workflows, client-side routing, state management, and third-party service integration.

This project was designed specifically as a portfolio piece for junior frontend developer roles.

______________________________________________________________________________________________

🔍 Technical Overview

TrailerHub is a single-page application (SPA) built using React and Vite. It integrates Firebase for authentication and user data persistence, and follows modern frontend best practices such as reusable components, separation of concerns, and declarative UI updates via React hooks.

Key technical goals of this project:

Practice scalable React component structure

Implement authentication and protected routes

Persist user-specific data across sessions

Simulate a real streaming-platform user experience

______________________________________________________________________________________________

🧠 Core Functionality

User authentication using Firebase (email/password)

Conditional rendering based on authentication state

Movie browsing interface with dynamic UI updates

Trailer viewing for selected movies

User-specific watchlist creation and persistence

Toast-based UI feedback for user actions

Responsive layout for desktop and mobile devices

______________________________________________________________________________________________

🧱 Architecture & Design Decisions

React + Vite for fast development and modern tooling

React Router for client-side routing and page separation

Firebase Authentication for secure user login/signup

Firestore for storing user watchlists

React Hooks for local state and lifecycle management

Component-driven design to promote reusability and maintainability

______________________________________________________________________________________________

🧰 Tech Stack
React
Vite
react-router-dom
Firebase Auth
Firebase Firestore
react-toastify
CSS
Git & GitHub

______________________________________________________________________________________________

🛠️ Local Development Setup

Clone the repository

git clone https://github.com/Leocruzjr/TrailerHub.git



Install dependencies

npm install



Firebase Setup

Create a Firebase project

Enable Email/Password Authentication

Create a Firestore database

Add Firebase credentials to src/firebase.js

Run the development server

npm run dev

______________________________________________________________________________________________

🔐 Authentication & Data Flow

Firebase manages user authentication state

Auth state changes trigger UI updates via React

Each authenticated user has a unique watchlist

Firestore stores and retrieves user-specific data

Unauthorized users are restricted from protected views

______________________________________________________________________________________________

🖼️ Screenshots

📸 User Login / Signup

![afe5c710b1873c876904fcc8a8ed2701](https://github.com/user-attachments/assets/41b25d51-c49f-4551-94aa-ba45e0fbf7df)


📸 Home / Browse Page

![e11a7b3a1fc22f2edcc8607de91673c0](https://github.com/user-attachments/assets/f34552e6-5dcf-4cc9-8ac6-cec95b86df2e)

![e75cfd0255fb8df1f6963b139f9ffb89](https://github.com/user-attachments/assets/788ed51c-5ddc-4a5f-9b71-e9725d4eafd1)


📸 Movie Trailer Modal

![2cda13b105d665fd81d78100044fffc6](https://github.com/user-attachments/assets/1b72c0dc-44b5-46d0-8783-93d815ef639b)


📸 Responsive Mobile Layout

<img width="425" height="927" alt="2e6cb1e25368815562be7a0f246aa7c7" src="https://github.com/user-attachments/assets/f65ab9ac-2d4a-47ca-900f-3cd7689af769" />

<img width="424" height="925" alt="2c49402552b072b5504ce4ff4a6ac786" src="https://github.com/user-attachments/assets/4296b927-83d2-434c-8bae-8bc4986843eb" />

<img width="426" height="928" alt="2cca11a303577295079d4679de2f820d" src="https://github.com/user-attachments/assets/86391636-5dc9-47f2-84ba-e4434deecaf2" />

<img width="430" height="928" alt="5880d11477c9b7e0a7f6a14af77d155b" src="https://github.com/user-attachments/assets/3a95d43b-bfda-4695-9659-af0fc3755422" />






