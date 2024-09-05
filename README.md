# Blog Platform

This is a simple blog platform where users can create, view, and delete blog posts. The platform includes a backend REST API built with **Express.js** and **SQLite**, and a frontend built with **Next.js** using **ShadCN** for the UI components.

## Features

- Create, view, and delete blog posts
- Responsive design using ShadCN components
- REST API backend with SQLite database
- Basic form validation on the frontend
- Confirmation modal before deleting posts
- Bonus: Edit existing blog posts

---

## Project Structure

- **Frontend:** Next.js with ShadCN UI components
- **Backend:** Express.js with SQLite database

---

## Setup Instructions

### 1. Backend Setup (Express.js + SQLite)

#### Prerequisites
- Node.js installed (https://nodejs.org)

#### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blog-platform.git
    cd blog-platform/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the backend server:
    ```bash
    node index.js
    ```

The backend will run on `http://localhost:3001`.

#### API Endpoints
- `GET /posts`: Retrieve all blog posts
- `GET /posts/:id`: Retrieve a single post by ID
- `POST /posts`: Create a new post
- `DELETE /posts/:id`: Delete a post by ID

---

### 2. Frontend Setup (Next.js + ShadCN)

#### Prerequisites
- Node.js installed
- An IDE or code editor (VS Code, Sublime Text, etc.)

#### Steps
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the Next.js development server:
    ```bash
    npm run dev
    ```

The frontend will run on `http://localhost:3000`.

---

## Database Setup

The project uses an in-memory **SQLite** database. For persistent storage, you can modify the `index.js` file in the backend to use a file-based SQLite database:

1. Open `index.js`.
2. Replace the database initialization code:
    ```js
    const db = new sqlite3.Database(':memory:');  // change this to a file
    ```
   with:
    ```js
    const db = new sqlite3.Database('./blog-platform.db');  // file-based DB
    ```

---

## Deployment

### Frontend
1. Deploy the Next.js frontend to **Vercel** or **Netlify**.
2. Ensure the environment variables (API URL) are set correctly for the backend.

### Backend
1. Deploy the Express backend to **Heroku** or another Node.js hosting service.
2. Ensure the database is configured correctly for production.

---

## Usage

1. Visit the homepage to view all blog posts.
2. Click on "Create Post" to add a new blog post.
3. Click "View" on a post to view its content in full.
4. Use the delete button to remove a post, which will prompt a confirmation modal.

---

## Technologies Used

- **Frontend:**
  - Next.js (React Framework)
  - ShadCN (UI Library)
  - Axios (HTTP client for API calls)

- **Backend:**
  - Express.js (Web Framework for Node.js)
  - SQLite (Database)

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Author

- **Pulkit Jain** - (https://github.com/Pulkit-2002)
