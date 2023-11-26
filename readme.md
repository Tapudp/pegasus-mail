# Email Sender App

A simple React Native app with a Node.js backend for sending emails.

## Table of Contents

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)

## Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
- Expo CLI: Install globally with `npm install -g expo-cli`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pegasus-mail.git
   ```

2. Install packages and run the setup

```
npm install

```

- to run the backend api server in dev mode

```

npm run dev

```

3. Configure the backend:
   Update AWS SES credentials in backend/config/aws.js (commented for future use).
   Update Gmail credentials in .env file that is already in use in the email-service.

4. For the front-end/app

- move the front-end folder, install package

```
npm install
```

- We have set this app with expo-cli, so run the app with expo

```
expo start
```

## Folder Structure

### Backend

- **backend**
  - **config:** Configuration files
    - `aws.js` _(AWS SES credentials - commented for future use)_
    - `gmail.js` _(Gmail credentials)_
  - **constants:** Constant values
  - **controllers:** Route controllers
  - **routes:** Express.js route definitions
  - **service:** Email sending logic
    - `emailService.js` _(Nodemailer setup)_
    - `ses.config.js` _(AWS SES configuration - commented for future use)_
  - **utils:** Utility functions
    - `error-handler.js` _(Error handling utilities)_
    - `logger.js` _(Logging utilities)_

### Frontend

- **frontend**
  - `App.js` _(Main file for React Native app)_
  - **components:** Reusable components
    - `SendButton.js` _(Example component)_
  - **service:** Service layer for API requests
    - `apiService.js` _(Example service file)_

## Usage

- Run the React Native app using expo start.
  - Once the server starts press 'w' to run the web-app, the instructions will be visible in the terminal too for android and ios.
  - App will be running on `http://localhost:19006`
- Access the Node.js backend API at .
  - `http://localhost:3001`
