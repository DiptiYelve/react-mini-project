# Weather Forecasting App

A simple and responsive weather forecasting app built with **Vite**, **React.js**, **MaterialUI** and **OpenWeatherMap API**. This app allows users to check the current weather in any city around the world with real-time updates.

## Features

- Search for the weather in any city.
- Display current weather conditions including temperature, humidity, wind speed, and weather description.
- Responsive UI, optimized for both mobile and desktop.
- Fetches data in real-time using the OpenWeatherMap API.

## Tech Stack

- **Frontend**: React.js
- **Bundler**: Vite.js 
- **API**: OpenWeatherMap API
- **Styling**: MaterialUI

## Installation

To run this project locally, follow the steps below:

### 1. Clone the repository
    ```bash
    git clone https://github.com/DiptiYelve/react-mini-project.git
    cd react-mini-project
### 2. Install dependencies
    Make sure you have Node.js installed, then run the following command to install the required dependencies:
    
    ```bash
    npm install

### 3. Set up the OpenWeatherMap API
1. Go to the OpenWeatherMap website and create an account if you don't have one.
2. After logging in, navigate to the API Keys section and create a new API key or use the default one.
3. Copy the API key.

### 4. Add the API Key to your .env file
Create a .env file in the root directory of your project and add the following:

    ```env
    VITE_API_KEY=your_api_key_here

Replace your_api_key_here with the API key you copied from OpenWeatherMap.

### 5. Start the development server
Once you’ve set up everything, start the development server:

```bash
npm run dev
