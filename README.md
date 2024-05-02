# Project Management Dashboard

A project management application built with Next.js, Zustand, React Query, Ant Design, and Tailwind CSS.

## Deployment

- **Live Link :** [Project Management Dashboard](https://project-management-dashboard-nu.vercel.app)

## Login Info

- **Email** : mobassherpautex@gmail.com
- **Password** : mobassher123

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [License](#license)

## Introduction

This project is a dashboard for managing tasks and projects. It includes features such as authentication, project overview, project details, task management, task filters, search functionality, and an interactive dashboard.

## Features

- **Authentication Page**: Allows users to log in with form validation and mock responses for successful and unsuccessful logins.
- **Projects Overview Page**: Displays a list of projects with options to view, edit, or delete.
- **Project Details Page**: Shows detailed information about selected projects, including tasks, team members, and recent activities.
- **Task Management**: Allows adding, editing, and marking tasks as completed, with drag-and-drop functionality to change task statuses.
- **Task Filters and Search Functionality**: Enables filtering tasks by status, due date, or assignee, and provides a search bar for quick task searches.
- **Interactive Dashboard**: Utilizes Ant Design components for modals, dropdowns, and tooltips, with responsive design using Tailwind CSS.

## Technical Stack

- **Framework**: Next.js for routing and server-side rendering.
- **State Management**: Zustand for managing the global state.
- **Data Fetching**: React Query for handling asynchronous data fetching, state management, and cache management.
- **UI Components**: Ant Design for pre-built UI components.
- **Styling**: Tailwind CSS for responsive design and custom styling needs.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Md-Mobassher/project-management-dashboard.git
```

2. Navigate to the project directory:

```
cd project-management-dashboard
```

3. Install dependencies:

```
npm install
# or
yarn
```

4. Run the development server:

```
npm run dev # or yarn dev
```

5. Open http://localhost:3000 in your browser to view the application.

## Folder Structure

The project follows a standard folder structure:

- **components**: Contains reusable React components used throughout the application.
- **pages**: Contains Next.js pages for routing and rendering.
- **styles**: Contains global styles and utility classes for Tailwind CSS.
- **mock**: Contains mock data for development and testing purposes.

## License

This project is licensed under the MIT License.
