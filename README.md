# GitHub Info Search - Next.js Project

## 1. Project Overview

**Project Name:** GitHub Info Search\
**Description:** A Next.js web application that fetches GitHub user data, displaying key details like username, followers count, and more. Built as part of the GDG Tech Winter Workshop.

## 2. Installation and Setup

### System Requirements

- **Node.js:** v18+
- **Browser:** Modern browsers (Chrome, Firefox, Edge)

### Dependencies

- **Next.js:** 15.1.0
- **React:** 19.0.0
- **React DOM:** 19.0.0

### How to Install Node.js

1. Visit the official [Node.js website](https://nodejs.org/).
2. Download the **LTS version** for stability.
3. Follow the installation instructions for your operating system.
4. Verify installation by running:
   ```bash
   node -v
   ```

## 3. Project Structure

```
/gdg-tech-winter-nextjs
|-- /public              # Static files like images
|-- /src
|   |-- /app             # Main app folder
|   |   |-- /about       # About page
|   |   |   |-- page.js  # About route
|   |   |-- /contact     # Contact page
|   |   |   |-- page.js  # Contact route
|   |   |-- /api         # Custom API endpoints
|   |   |   |-- /hello
|   |   |   |-- /message
|   |   |   |-- /users
|   |   |-- /user        # User input and dynamic page
|   |   |   |-- [name]   # Dynamic username route
|   |   |   |-- page.js  # Main username input page
|   |-- /components      # Reusable components (Navbar, etc.)
|   |-- globals.css      # Global CSS styles
|   |-- page.js          # Entry Point to the App
|   |-- layout.js        # Shared layout
|   |-- page.module.css  # Module-specific CSS
|-- package.json         # Project dependencies and scripts
|-- README.md            # Project documentation
```

## 4. Features

- Search for GitHub users by username.
- View user details like profile picture, repositories, and bio.
- Responsive and clean UI.

## 5. How to Run the Project

1. **Fork the repository (You need a GitHub account):**
   Visit the repository on GitHub and click the **Fork** button.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gdg-tech-winter-nextjs.git
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Visit the app in your browser:**
   ```
   http://localhost:3000
   ```

## 6. How to Use the App

1. Open the application in your browser.
2. Navigate to **GitHub Card** page using link in the Navbar.
3. Enter a GitHub username in the search field.
4. Click the **Go to User Page** button to display user details.

## 7. API Integration

- **GitHub API:** Used to fetch user data.

## 🛠️ Project Maintainers

<div align="center">
   <table cellspacing="20">
      <tbody>
         <td align="center">
            <a href="https://github.com/shridharkhare">
               <img alt="github profile" src="https://avatars.githubusercontent.com/u/83900378?v=4" width="130px;" margin="20px;">
               <br>
               <sub><b> Shridhar Khare </b></sub>
            </a>
            <br>
            <a href="https://www.linkedin.com/in/shridhar-khare/">
               <img src="https://img.shields.io/badge/-Contact%20Me-informational?style=flat&logo=gmail&logoColor=white&color=2bbc8a" alt="Contact Me">
            </a>
            <br>
            Web Developer
         </td>
         <td align="center">
            <a href="https://github.com/atharvakolekar">
               <img alt="github profile" src="https://avatars.githubusercontent.com/u/118675133?v=4" width="130px;">
               <br>
               <sub><b> Atharva Kolekar </b></sub>
            </a>
            <br>
            <a href="https://www.linkedin.com/in/atharva-kolekar/">
               <img src="https://img.shields.io/badge/-Contact%20Me-informational?style=flat&logo=gmail&logoColor=white&color=2bbc8a" alt="Contact Me">
            </a>
            <br>
            Full Stack Developer
         </td>
      </tbody>
   </table>
</div>
