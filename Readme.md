# TypeScript Node.js Starter Template

This is a starter template for building Node.js applications with TypeScript. It provides a basic project structure, along with some essential dependencies and configurations to help you get started quickly.

## Features

-   TypeScript support for writing type-safe code
-   Express.js for building web applications
-   Zod for request body validation
-   Prisma as an ORM (Object-Relational Mapping) tool
-   Docker Compose configuration for local development with PostgreSQL

## Prerequisites

Make sure you have the following software installed on your machine:

-   Node.js (v12 or higher)
-   Docker (for local development with PostgreSQL)

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/rokasta12/typescript-nodejs-starter/
    ```
2. Install deps

    ```bash
    cd typescript-nodejs-starter && yarn
    ```

3. Set up the environment variables:

Create a .env file in the root directory of the project.
Define the required environment variables in the .env file. You can refer to the provided .env.example file for a list of required variables.

4. Run the Application:
   For development with automatic reload (using nodemon):
    ```bash
    yarn start:dev
    ```

## Scripts

The following scripts are available to run in the project:

-   `npm run start:dev`: Starts the development server with automatic reload using nodemon.
-   `npm run build`: Builds the TypeScript code into the `build` directory.
-   `npm start`: Runs the production-ready application from the compiled code.
-   `npm run lint`: Runs ESLint to lint your TypeScript code.
-   `npm run lint:fix`: Runs ESLint and fixes any fixable issues automatically.

## Database Setup

This starter template includes a Docker Compose configuration for running a PostgreSQL database locally. Follow the steps below to set it up:

1. Make sure you have Docker installed on your machine.

2. Open a terminal and navigate to the root directory of the project.

3. Run the following command to start the PostgreSQL database:

    ```bash
    docker-compose up -d
    ```

    4.The PostgreSQL instance will be available on localhost:5432. You can configure the connection URL for the database in your environment variables or directly in your code.
