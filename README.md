# UsersAPI

A users list app made with Node, Express and MongoDB.

## Screenshots

![image](https://github.com/Camicardenasp/backend-api/blob/main/screenshot.png)

To retrieve users information from backend go to the next link: [](https://backend-api-one.vercel.app/users)

Author: Camilo Cárdenas

A simple and easy-to-use users API that helps you organize users and keep track of them.

Features

+ Create new users registers with different information
+ Edit and delete existing users

## Usage

To use Users-API, simply follow these steps:

+ Go to the UsersAPI URL
+ See the previous users registered
+ Create a new register by entering a name, lastname, email, password, and if it is_admin.

## Installation

1. `cd API`
2. `npm install`
3. `npm run dev` or `nodemon index`

### Note

This app is aimed to be for testing only and is NOT meant to be deployed to production. It lacks request validation, security checks, error handlers and a lot more.

## Getting Started

It comprises of `MongoDB`, `Express`, and `Node`. `MongoDB`, `Express`, `Node` for **back-end development**

## Development

### Installed Packages

1. `npm init -y`
        this creates package.json file
2. npm install express mongoose cors nodemon
        this installs these packages
3. Create index.js file, this will contain all connection information
4. Create user.js in models folder this will create or fetch user
5. Use postman (or thunderclient a visual studio extension for verifying connection right from visual studio).

+ `npm install -D nodemon` to be able to see changes instantly without reinitializing the server (hot reloading).
+ `npm i express`

Then we created several scripts to agilize development

```json
    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js",
        "lint": "eslint"
    },
```

### Getting MongoDB Connection

    Open Connect and click on - Connect your Application

  ![image](https://user-images.githubusercontent.com/76637730/174515425-a6b7db82-5cd3-4cc3-9b27-ecad8e395983.png)

    Copy and Add your connection string into your application code

  ![image](https://user-images.githubusercontent.com/76637730/174516230-232c6be6-d00b-4067-b15e-1f9cf9c57784.png)

