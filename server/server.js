// In this code, 'app.get' sets up GET routes at the specified paths
// Each route sends a simple text response 

// Import the express library
const express = require('express');

// Instantiate an express application 
const app = express();

// The port we want to listen to
const port = 3000;

// Define a GET route for the root ("/") URL of our website
// When a client sends a GET request to "/", this function will be called
app.get('/', (req, res) => {
    // send a response back to the client w/ the msg "Hello, World!"
    res.send('Hello, world!');
});

// Define a GET route for "/register"
// A placeholder and need to be replaced w/ actual functionality
app.get('/register', (req, res) => {
    res.send('Placeholder for user registration');
});

// Define a GET route for "/login"
// Also a placeholder 
app.get('/login', (req, res) => {
    res.send('Placeholder for user login');
});

// Define a GET route for "/documents"
app.get('/login', (req, res) => {
    res.send('Placeholder for user login');
});