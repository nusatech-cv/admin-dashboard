# Platform Admin

## Introduction
This repository contains the codebase for the `Platform Admin` app. It's a web application designed for managing and controlling the underlying platform. A user with admin privileges can monitor activities, maintain orders, manage payments, control services, assess therapist ratings and handle user details.

The app is built with TypeScript and uses packages like react.js for UI, tailwind CSS for styling, and other important libraries. It follows the modular approach to keep the functionality of different sections of the application separated and easy to manage.

## Project Structure
The project structure is well organized as per the standard best practices and is easy to navigate. Directories are named in a self-explanatory way to represent their functionalities.

Take a look at the simplified project structure below:

```
.
├── Dockerfile
├── index.html
├── LICENSE.md
├── nginx.conf
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── public
├── README.md
├── src
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

## Setup & Installation 

### Requirements

The application requires the following software to run:

- Node.js: `18.x.x`
- npm: `9.x.x`
- Docker: `>=20.10.x` (optional)

Ensure that you are running the required versions or more recent.

### Environment Variables

Before running the application, make sure to set up your environment variables. You can find a `.env.example` file in the root of the project as a template.

```bash
$ cp .env.example .env
```

Fill out this `.env` file with your environment variables.

### Using npm

1. Clone the repository:

```bash
$ git clone <repository-link>
```

2. Install the dependencies:

```bash
$ npm install
```

3. Start the local server:

```bash
$ npm start
```

The application will be served on `http://localhost:3000` or on the port you specify.

### Using Docker

1. Clone the repository:

```bash
$ git clone <repository-link>
```

2. Build the Docker image:

```bash
$ docker build -t platform-admin-app .
```

3. Run the Docker container:

```bash
$ docker run -p 8080:80 platform-admin-app
```

With Docker, the application will be served on `http://localhost:8080` or on the port you specify.

*NOTE*: For using Docker, make sure Docker is installed in your system and running.

## How to Use

### Authentication Sign In
The `Authentication/SignIn.tsx` file contains the logic for the Admin Sign In page. Visit `{base-url}/signin` to access this page.

### Dashboard
The `Dashboard/index.tsx` file renders the Dashboard page. Here, you can view an overview and statistics of the platform.

### Activity
The `Activity/index.tsx` file contains all the activities in the platform. Visit `{base-url}/activity` to access this page.

### Orders
All the orders can be found in `Orders/index.tsx`. Visit `{base-url}/orders` to access this page.

### Payments
The `Payments/index.tsx` contains the logic for viewing all the payments done on the platform. Visit `{base-url}/payments` to access this page.

### Services
You can add and remove services in `Services/index.tsx`. Visit `{base-url}/services` to access this page.

### Therapists
For managing therapists visit `{base-url}/therapist` which is handled by `Therapist/index.tsx`.

### Users
You can manage all the user details in `Users/index.tsx`.
  
Please note that `{base-url}` is the url where the application is being served.

## Codebase Understanding
The majority of the source code lies inside the `src` folder. It includes pages, components, modules, and other configurations of the app.

* `App.tsx` is the main entry point for the application.
* `index.css` involves the main CSS.
* `main.tsx` is the main TypeScript file which renders the App component into the root.
* `store.ts` is used for setting up the redux store for state management.
* `helpers` directory has utility functions used across the application.
* `hooks` directory is for the custom React Hooks.
* `components` directory contains generic components used across multiple pages.
* `constants` contains the constants for the project.
* `fonts` includes custom fonts for the application.
* `js` contains scripts that directly engage with DOM.
* `containers` directory includes Higher Order Components (HOCs).
* `pages` includes all the pages component for routing.
* The `api` directory contains api and request related files.
* The `layout` directory contains layout-related components.

## Conclusion
The `Platform Admin App` is a comprehensive solution for managing and controlling an underlying platform. By having a clean and maintainable code structure, it provides an easy way to track, debug, and further develop the application. Moreover, it's set up with modern tooling which makes the development process more enjoyable.