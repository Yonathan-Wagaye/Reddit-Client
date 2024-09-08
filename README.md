# Reddit Cilent

This is a React and Redux-based application that interacts with the Reddit API to allow users to search, view, and filter posts. The app also provides a detailed view of posts with comments and has a cohesive, responsive design for both mobile and desktop users.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Work](#future-work)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Reddit App allows users to:
- View a list of posts from a specific subreddit.
- Search for posts using keywords.
- Filter posts based on predefined categories (e.g., new, hot, top).
- View detailed post information and comments.
- Enjoy a smooth, responsive user experience across devices.

## Features

- **Search**: Users can search for specific posts based on keywords.
- **Filter**: Posts can be filtered by categories like hot, new, and top.
- **Detailed View**: Clicking on a post opens a detailed view with its content and comments.
- **Responsive Design**: The application is designed to work seamlessly on both mobile and desktop devices.
- **Error Handling**: Friendly error states for failed searches or API calls.
- **Cohesive Design**: Smooth animations and transitions to enhance user experience.

## Wireframes

You can view the wireframes for the app below:

![Wireframe Image](./documentation/Reddit%20Client%20Wire%20Frame.png)

The wireframes represent the layout and flow of the application, demonstrating the homepage, post detail page, and responsive views.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Redux**: For global state management.
- **React Router**: To manage routing and navigation between pages.
- **Redux Toolkit**: To simplify Redux configuration.
- **CSS/SCSS**: For styling the app and ensuring a responsive design.
- **Jest**: For unit testing components.
- **Cypress**: For end-to-end testing.
- **Lighthouse**: Used for performance, accessibility, and SEO audits.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Navigate to the project directory and install dependencies:
    ```bash
    cd reddit-app
    npm install
    ```

3. Create a `.env` file to store the Reddit API configuration if needed.

4. Start the development server:
    ```bash
    npm start
    ```

The application will be running on `http://localhost:3000`.

## Usage

1. **Homepage**: The homepage shows a list of posts from a predefined subreddit. Users can search for posts and filter them by categories like hot, new, and top.
2. **Post Details**: Clicking on a post takes the user to a detailed view, where they can read more about the post and see its comments.
3. **Responsive Design**: The app is fully responsive and adapts to both mobile and desktop layouts.

## Future Work

- **Progressive Web App (PWA)**: Convert the app into a PWA for offline access and improved performance.
- **CI/CD Workflow**: Set up automatic deployments with GitHub Actions.
- **Custom Subreddit Search**: Allow users to search any subreddit, not just a predefined one.
- **Dark Mode**: Add a theme switcher to toggle between light and dark modes.

## Testing

### Unit Tests

Unit tests are written using **Jest** and **Enzyme** for all major components. Run the unit tests using:
```bash
npm test
